import multer from "multer";
import { extname } from "path";

const aleatory = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/projects/patrimonies");
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${aleatory()}${extname(file.originalname)}`);
    },
  }),
};
