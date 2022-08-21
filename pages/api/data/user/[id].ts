import type { NextApiRequest, NextApiResponse } from "next";
import { deleteUser, getUser, updateUser } from "../../../../lib/db";
import bcrypt from "bcrypt";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "DELETE":
      try {
        await deleteUser(Number(id));
        res.status(200).json({ message: "Deleted successfully" });
        break;
      } catch (error) {
        res.status(400).json({ error: true, msg: error });
        break;
      }
    case "GET":
      try {
        const dados = await getUser(Number(id));
        res.status(200).json(dados);
      } catch (error) {
        res.status(400).json({ error: true, msg: error });
      }
      break;

    case "PUT":
      try {
        const { name, email, password } = req.body;
        if (password != null) {
          const passwordHash = bcrypt.hashSync(password, 10);
          const data = {
            name: name,
            email: email,
            password_hash: passwordHash,
          };
          await updateUser(Number(id), data);
        } else {
          const data = {
            name: name,
            email: email,
            password_hash: undefined,
          };
          await updateUser(Number(id), data);
        }

        res.status(200).json({ message: "Updated successfully" });
      } catch (error) {
        res.status(400).json({ error: true, msg: error });
      }
      break;
    default:
      res.status(400).json({ error: true, msg: "URL does not exist" });
      break;
  }
}
