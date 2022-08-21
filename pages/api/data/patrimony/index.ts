import type { NextApiRequest, NextApiResponse } from "next";
import { createPatrimony, getAllPatrimonies } from "../../../../lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const data = await getAllPatrimonies();
        res.status(200).json(data);
      } catch (error) {
        res.status(400).json({ error: true, msg: error });
      }
      break;
    case "POST":
      const { name, cod, owner, userId } = req.body;
      try {
        const data = {
          name,
          cod,
          owner,
          userId,
        };
        const patri = await createPatrimony(data);
        res.status(200).json({ message: "Created successfully", id: patri.id });
      } catch (error) {
        res.status(400).json({ error: true, msg: error });
      }
      break;

    default:
      res.status(400).json({ error: true, msg: "URL does not exist" });
      break;
  }
}
