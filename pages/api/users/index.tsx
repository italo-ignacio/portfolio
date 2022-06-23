import dbConnect from "../../../src/database/config/dbConnect";
import User from "../../../src/database/models/User";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const user = await User.find({});
        res.status(200).json(user);
      } catch (error) {
        res.status(400).json({ error: true });
      }
      break;

    case "POST":
      try {
        const { email } = req.body;
        const hasUser = await User.findOne({ email });
        if (hasUser) {
          return res.status(400).json({ error: "Email already exists " });
        }
        await User.create(req.body);
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
