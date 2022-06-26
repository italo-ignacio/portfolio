import { patrimoniesRepo } from "../../../src/database/helpers/patrimony-repo";
import loginRequired from "../auth/loginRequired";

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const patrimonies = patrimoniesRepo.getAll();
        res.status(200).json(patrimonies);
      } catch (error) {
        res.status(400).json({ error: true });
      }
      break;

    case "POST":
      const { authorization } = req.headers;

      if (!authorization) {
        return res.status(401).json({ error: true, msg: "Login required" });
      }
      const data = await loginRequired(authorization);
      if (!data) {
        return res.status(401).json({ error: true, msg: "Login required" });
      }

      try {
        const {
          name = "",
          cod = "",
          note = "",
          details = "",
          url = "",
          owner = data.name,
          userId = data.id,
        } = req.body;
        if (name == "" || cod == "") {
          return res.status(400).json({ error: true, msg: "Missing data" });
        }
        if (patrimoniesRepo.find((x) => x.cod === cod)) {
          return res
            .status(400)
            .json({ error: true, msg: "Code already exists " });
        }
        patrimoniesRepo.create({
          name,
          cod,
          note,
          details,
          url,
          owner,
          userId,
        });
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
