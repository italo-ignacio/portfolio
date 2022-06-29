import loginRequired from "../auth/loginRequired";
import { patrimoniesRepo } from "../../../src/database/helpers/patrimony-repo";
import { usersRepo } from "../../../src/database/helpers/users-repo";

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const patrimony = patrimoniesRepo.getById(id);
        if (!patrimony) {
          return res
            .status(400)
            .json({ error: true, msg: "Patrimony not Found" });
        }
        res.status(200).json(patrimony);
      } catch (error) {
        res.status(400).json({ error: true, msg: "Patrimony not Found" });
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
        const patrimony = patrimoniesRepo.getById(id);
        if (!patrimony) {
          return res
            .status(400)
            .json({ error: true, msg: "Patrimony not Found" });
        }
        if (data.is_admin || patrimony.userId == data.id) {
          patrimoniesRepo.update(id, req.body);
        } else {
          return res.status(401).json({ error: true, msg: "Unauthorized" });
        }

        res.status(200).json({ success: true, msg: "Successfully updated" });
      } catch (error) {
        res.status(400).json({ error: true, msg: "Patrimony not Found" });
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
        const patrimony = patrimoniesRepo.getById(id);
        if (data.is_admin || patrimony.userId == data.id) {
          patrimoniesRepo.delete(id);
        } else {
          return res.status(401).json({ error: true, msg: "Unauthorized" });
        }
        usersRepo.update(data.id, { patrimonies: data.patrimonies - 1 });
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
