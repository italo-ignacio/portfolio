import bcrypt from "bcrypt";
import loginRequired from "../auth/loginRequired";
import { usersRepo } from "../../../src/database/helpers/users-repo";

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const user = usersRepo.getById(id);
        if (!user) {
          return res.status(400).json({ error: true, msg: "User not Found" });
        }
        res.status(200).json(user);
      } catch (error) {
        res.status(400).json({ error: true, msg: "User not Found" });
      }
      break;

    case "PUT":
      const { authorization } = req.headers;

      if (!authorization) {
        return res.status(401).json({ error: true, msg: "Login required" });
      }
      const data = await loginRequired(authorization);
      if (!data) {
        return res.status(401).json({ error: true, msg: "Login required" });
      }

      try {
        const user = usersRepo.getById(id);
        if (!user) {
          return res.status(400).json({ error: true, msg: "User not Found" });
        }
        if (data.is_admin || id == data.id) {
          const {
            name = user.name,
            email = user.email,
            password = "",
          } = req.body;
          if (password != "") {
            let hash = bcrypt.hashSync(password, 10);
            usersRepo.update(id, { name: name, email: email, password: hash });
          } else {
            usersRepo.update(id, { name: name, email: email });
          }
        } else {
          return res.status(401).json({ error: true, msg: "Unauthorized" });
        }

        res.status(200).json({ success: true, msg: "Successfully updated" });
      } catch (error) {
        res.status(400).json({ error: true, msg: "User not Found" });
      }
      break;

    case "DELETE":
      try {
        const { authorization } = req.headers;

        if (!authorization) {
          return res.status(401).json({ error: true, msg: "Login required" });
        }
        const data = await loginRequired(authorization);
        if (!data) {
          return res.status(401).json({ error: true, msg: "Login required" });
        }
        if (data.is_admin || id == data.id) {
          usersRepo.delete(id);
        } else {
          return res.status(401).json({ error: true, msg: "Unauthorized" });
        }
        res.status(200).json({ success: true, msg: "Successfully deleted" });
      } catch (error) {
        res.status(400).json({ error: true, msg: error });
      }
      break;

    default:
      res.status(400).json({ error: true, msg: "URL does not exist" });
      break;
  }
}
