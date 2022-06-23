import multer from "multer";
import dbConnect from "../../../src/database/config/dbConnect";
import multerConfig from "../../../src/database/config/multerConfig";
import Patrimony from "../../../src/database/models/Patrimony";
import loginRequired from "../auth/loginRequired";

const upload = multer(multerConfig).single("photo");

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
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
        const patrimony = await Patrimony.findById(id);

        if (!patrimony) {
          return res.status(400).json({
            error: true,
            msg: "Patrimony not found",
          });
        }

        if (data.is_admin || patrimony.userId == data.id) {
          upload(req, res, async (err) => {
            if (err) {
              return res.status(400).json({
                error: true,
                msg: [err],
              });
            }

            const { filename } = req.file;
            try {
              patrimony.filename = filename;
              await patrimony.save();
            } catch (e) {
              return res
                .status(400)
                .json({ error: true, msg: "Fail to save", e });
            }
          });
        } else {
          return res.status(401).json({ error: true, msg: "Unauthorize" });
        }
        res.status(200).json({ success: true, msg: "Successfully updated" });
        break;
      } catch (e) {
        return res.status(400).json({
          error: true,
          msg: "Patrimony not found",
        });
      }

    default:
      res.status(400).json({ error: true, msg: "URL does not exist" });
      break;
  }
}
