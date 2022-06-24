import { usersRepo } from "../../../src/database/helpers/users-repo";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const users = usersRepo.getAll();
        res.status(200).json(users);
      } catch (error) {
        res.status(400).json({ error: true });
      }
      break;

    case "POST":
      try {
        const { password, ...user } = req.body;
        if (usersRepo.find((x) => x.email === user.email)) {
          return res
            .status(400)
            .json({ error: true, msg: "Email already exists " });
        }
        user.password = bcrypt.hashSync(password, 10);
        usersRepo.create(user);
        res.status(201).json({ success: true, msg: "Successfully created" });
      } catch (error) {
        res.status(400).json({ error: true, msg: error });
      }
      break;

    default:
      res.status(400).json({ error: true, msg: "URL does not exist" });
      break;
  }
}
