import mongoose from "mongoose";
import bcrypt from "bcrypt";

const manager = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    is_admin: {
      type: Boolean,
      default: false,
    },
  },
  {
    methods: {
      passwordIsValid(password, password_hash) {
        return bcrypt.compare(password.toString(), password_hash);
      },
    },
  }
);

manager.pre("save", function (next) {
  bcrypt.hash(this.password, 10, (err, hashedPassword) => {
    if (err) {
      next(err);
    } else {
      this.password = hashedPassword;
      next();
    }
  });
});

var User: any;
if (mongoose.models.User) {
  User = mongoose.model("User");
} else {
  User = mongoose.model("User", manager);
}
export default User;
