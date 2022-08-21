import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { verifyUser } from "../../../../lib/db";

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
  const { method } = req;

  switch (method) {
    case "POST":
      try {
        const { authorization } = req.headers;
        if (!authorization) {
          return res.status(401).json({ error: true, msg: "Login required" });
        }
        const [, token] = authorization.split(" ");

        const data = jwt.verify(token, process.env.TOKEN_SECRET);

        const { id, name, email, is_admin } = data as TokenPayload;

        const user = await verifyUser(id, name, email, is_admin);
        if (user) {
          res.status(200).json(user);
        } else {
          res.status(401).json({ error: true, msg: "Login required" });
        }
        break;
      } catch (error) {
        res.status(401).json({ error: true, msg: "Login required" });
      }

      break;

    default:
      res.status(400).json({ error: true, msg: "URL does not exist" });
      break;
  }
}
