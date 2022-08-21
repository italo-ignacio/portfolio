import type { NextApiRequest, NextApiResponse } from "next";
import {
  deletePatrimony,
  getPatrimony,
  updatePatrimony,
  verifyUser,
} from "../../../../lib/db";
import jwt from "jsonwebtoken";

interface TokenPayload {
  id: number;
  name: string;
  email: string;
  is_admin: boolean;
  iat: number;
  exp: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { id },
    method,
  } = req;

  if (method == "GET") {
    try {
      const dados = await getPatrimony(Number(id));
      return res.status(200).json(dados);
    } catch (error) {
      return res.status(400).json({ error: true, msg: error });
    }
  }

  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: true, msg: "Login required" });
  }
  const [, token] = authorization.split(" ");

  const data = jwt.verify(token, process.env.TOKEN_SECRET) as TokenPayload;

  const user = await verifyUser(data.id, data.name, data.email, data.is_admin);
  if (user) {
    switch (method) {
      case "DELETE":
        try {
          await deletePatrimony(Number(id));
          res.status(200).json({ message: "Deleted successfully" });
          break;
        } catch (error) {
          res.status(400).json({ error: true, msg: error });
          break;
        }

      case "PUT":
        try {
          const data = req.body;
          await updatePatrimony(Number(id), data);
          res.status(200).json({ message: "Updated successfully" });
        } catch (error) {
          res.status(400).json({ error: true, msg: error });
        }
        break;
      default:
        res.status(400).json({ error: true, msg: "URL does not exist" });
        break;
    }
  } else {
    res.status(401).json({ error: true, msg: "Login required" });
  }
}
