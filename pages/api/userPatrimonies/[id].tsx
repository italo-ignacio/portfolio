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
        const user = usersRepo.getById(id);
        if (!user) {
          return res.status(400).json({ error: true, msg: "User not Found" });
        }
        const patrimony = patrimoniesRepo.findAll(id);
        const data = {
          name: user.name,
          email: user.email,
          qtd: user.patrimonies,
          patrimonies: patrimony,
        };
        res.status(200).json(data);
      } catch (error) {
        res.status(400).json({ error: true, msg: "Patrimony not Found" });
      }
      break;

    default:
      res.status(400).json({ error: true, msg: "URL does not exist" });
      break;
  }
}
