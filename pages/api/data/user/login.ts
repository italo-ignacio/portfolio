import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { getUserEmail } from "../../../../lib/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case "POST":
      try {
        const { email, password } = req.body;
        if (!email || !password) {
          return res.status(400).json({ error: true, msg: "Invalid data" });
        }
        const user = await getUserEmail(email);
        if (!user) {
          return res.status(400).json({ error: true, msg: "User not found" });
        }

        if (!(await bcrypt.compare(password.toString(), user.password_hash))) {
          return res.status(400).json({ error: true, msg: "Invalid password" });
        }

        const { id, name, is_admin } = user;
        const token = jwt.sign(
          { id, name, email, is_admin },
          process.env.TOKEN_SECRET,
          {
            expiresIn: process.env.TOKEN_EXPIRATION,
          }
        );

        res.status(200).json({ token, user: { id, name, email, is_admin } });
      } catch (error) {
        res.status(400).json({ error: true, msg: "User not found" });
      }
      break;

    default:
      res.status(400).json({ error: true, msg: "URL does not exist" });
      break;
  }
}
