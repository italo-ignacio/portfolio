import mongoose from "mongoose";

const manager = new mongoose.Schema({
  name: {
    type: String,
  },
  cod: {
    type: String,
    unique: true,
  },
  note: {
    type: String,
    default: "",
  },
  details: {
    type: String,
    default: "",
  },
  filename: {
    type: String,
    default: "",
  },
  owner: {
    type: String,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
});

manager.virtual("sss").get(function (value, virtual, doc) {
  try {
    return `/projects/patrimonies/${
      this.filename ? this.filename : "not_found.jpg"
    }`;
  } catch (e) {
    return `/projects/patrimonies/not_found.jpg`;
  }
});

var Patrimony: any;
if (mongoose.models.Patrimony) {
  Patrimony = mongoose.model("Patrimony");
} else {
  Patrimony = mongoose.model("Patrimony", manager);
}
export default Patrimony;
