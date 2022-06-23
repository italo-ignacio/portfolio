import dbConnect from "../../../src/database/config/dbConnect";
import User from "../../../src/database/models/User";
import loginRequired from "../auth/loginRequired";

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const user = await User.findById(id);
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
        return res.status(401).json({
          errors: ["Login required"],
        });
      }
      const data = await loginRequired(authorization);
      if (!data) {
        return res.status(401).json({
          errors: ["Login required"],
        });
      }

      try {
        const user = await User.findById(id);
        if (!user) {
          return res.status(400).json({ error: true, msg: "User not Found" });
        }

        if (data.is_admin || data.id.toString() === user.id.toString()) {
          const { password = "" } = req.body;
          await User.findOneAndUpdate({ _id: id }, req.body);
          if (password != "") {
            user.password = password;
            await user.save();
          }
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
          return res.status(401).json({
            errors: ["Login required"],
          });
        }
        const data = await loginRequired(authorization);
        if (!data) {
          return res.status(401).json({
            errors: ["Login required"],
          });
        }
        if (data.is_admin || id == data.id) {
          const deletedUser = await User.deleteOne({ _id: id });
          if (!deletedUser) {
            return res.status(400).json({ error: true, msg: "User not Found" });
          }
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
