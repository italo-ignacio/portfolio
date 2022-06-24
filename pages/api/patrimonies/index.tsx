import dbConnect from "../../../src/database/config/dbConnect";
import Patrimony from "../../../src/database/models/Patrimony";
import loginRequired from "../auth/loginRequired";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const response = await Patrimony.find();
        res.status(200).json(response);
      } catch (error) {
        res.status(400).json({ error: true });
      }
      break;

    case "POST":
      try {
        const { authorization } = req.headers;

        if (!authorization) {
          return res.status(401).json({ error: true, msg: "Login required" });
        }
        const data = await loginRequired(authorization);
        if (!data) {
          return res.status(401).json({ error: true, msg: "Login required" });
        }
        const { name, cod } = req.body;
        let patrimony = new Patrimony({
          name,
          cod,
          userId: data.id,
          owner: data.name,
        });

        await patrimony.save();
        res.status(201).json({ success: true, msg: "Successfully created" });
        break;
      } catch (err) {
        res.status(400).json({ error: true, msg: "Code already exists" });
      }
      break;
    default:
      res.status(400).json({ error: true, msg: "URL does not exist" });
      break;
  }
}
