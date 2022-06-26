import fs from "fs";
let users = require("../../../json/user.json");

export const usersRepo = {
  getAll: () => users,
  getById: (id) => users.find((x) => x.id.toString() === id.toString()),
  find: (x) => users.find(x),
  create,
  update,
  delete: _delete,
};

function create(user) {
  user.id = users.length ? Math.max(...users.map((x) => x.id)) + 1 : 1;
  user.is_admin = false;

  users.push(user);

  saveData();
}

function update(id, params) {
  const user = users.find((x) => x.id.toString() === id.toString());

  Object.assign(user, params);
  saveData();
}

function _delete(id) {
  users = users.filter((x) => x.id.toString() !== id.toString());
  saveData();
}

function saveData() {
  fs.writeFileSync(
    `${process.cwd()}/json/user.json`,
    JSON.stringify(users, null, 4)
  );
}
