import type { NextApiRequest, NextApiResponse } from "next";
import { createUser, getAllUsers } from "../../../../lib/db";
import bcrypt from "bcrypt";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const data = await getAllUsers();

        res.status(200).json(data);
      } catch (error) {
        res.status(400).json({ error: true, msg: error });
      }
      break;
    case "POST":
      const { name, email, password } = req.body;
      try {
        const passwordHash = bcrypt.hashSync(password, 10);
        const data = {
          name: name,
          email: email,
          password_hash: passwordHash,
        };

        await createUser(data);
        res.status(200).json({ message: "Created successfully", data });
      } catch (error) {
        res.status(400).json({ error: true, msg: error });
      }
      break;
    default:
      res.status(400).json({ error: true, msg: "URL does not exist" });
      break;
  }
}
