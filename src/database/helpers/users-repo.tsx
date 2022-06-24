import fs from "fs";
import path from "path";
let users = require("../../../public/data/user.json");

export const usersRepo = {
  getAll: () => users,
  getById: (id) => users.find((x) => x.id.toString() === id.toString()),
  find: (x) => users.find(x),
  create,
  update,
  delete: _delete,
};

function create(user) {
  // generate new user id
  user.id = users.length ? Math.max(...users.map((x) => x.id)) + 1 : 1;
  user.is_admin = false;

  // add and save user
  users.push(user);

  saveData();
}

function update(id, params) {
  const user = users.find((x) => x.id.toString() === id.toString());

  // update and save
  Object.assign(user, params);
  saveData();
}

// prefixed with underscore '_' because 'delete' is a reserved word in javascript
function _delete(id) {
  // filter out deleted user and save
  users = users.filter((x) => x.id.toString() !== id.toString());
  saveData();
}

// private helper functions

function saveData() {
  const file = path.join(process.cwd(), "data", "user.json");
  fs.writeFileSync(file, JSON.stringify(users, null, 4));
}
