import dbConnect from "../../../src/database/config/dbConnect";
import Patrimony from "../../../src/database/models/Patrimony";
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
        const patrimony = await Patrimony.findById(id);
        if (!patrimony) {
          return res
            .status(400)
            .json({ error: true, msg: "Patrimony not Found" });
        }
        res.status(200).json(patrimony);
      } catch (error) {
        res.status(400).json({ error: true });
      }
      break;

    case "PUT":
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
          const patrimony = await Patrimony.findOneAndUpdate(
            { _id: id },
            req.body
          );
          if (!patrimony) {
            return res
              .status(400)
              .json({ error: true, msg: "Patrimony not Found" });
          }
        } else {
          return res.status(401).json({ error: true, msg: "Unauthorized" });
        }

        res.status(200).json({ success: true, msg: "Successfully updated" });
      } catch (error) {
        res.status(400).json({ error: true, msg: error });
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
          const deletedPatrimony = await Patrimony.deleteOne({ _id: id });
          if (!deletedPatrimony) {
            return res
              .status(400)
              .json({ error: true, msg: "Patrimony not Found" });
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
