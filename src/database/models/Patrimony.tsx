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
  },
  details: {
    type: String,
  },
  filename: {
    type: String,
  },
  owner: {
    type: String,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
});

manager.virtual("url").get(function () {
  try {
    return `/projects/patrimonies/${
      this.filename ? this.filename : "not_found.jpg"
    }`;
  } catch (e) {
    return ``;
  }
});

var Patrimony: any;
if (mongoose.models.Patrimony) {
  Patrimony = mongoose.model("Patrimony");
} else {
  Patrimony = mongoose.model("Patrimony", manager);
}
export default Patrimony;
