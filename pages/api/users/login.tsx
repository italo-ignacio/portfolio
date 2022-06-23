import jwt from "jsonwebtoken";
import dbConnect from "../../../src/database/config/dbConnect";
import User from "../../../src/database/models/User";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "POST":
      try {
        const { email, password } = req.body;
        if (!email || !password) {
          return res.status(400).json({ error: true, msg: "Invalid password" });
        }
        const user = await User.findOne({ email });
        if (!user) {
          return res.status(400).json({ error: true, msg: "User not found" });
        }

        if (!(await user.passwordIsValid(password, user.password))) {
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

        return res.status(200).json({ token, user: { name, id, is_admin } });
      } catch (error) {
        res.status(400).json({ error: true, msg: error });
      }
      break;

    default:
      res.status(400).json({ error: true, msg: "URL does not exist" });
      break;
  }
}
