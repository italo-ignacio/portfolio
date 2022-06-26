import fs from "fs";
let patrimonies = require("../../../json/patrimony.json");

export const patrimoniesRepo = {
  getAll: () => patrimonies,
  getById: (id) => patrimonies.find((x) => x.id.toString() === id.toString()),
  find: (x) => patrimonies.find(x),
  create,
  update,
  delete: _delete,
};

function create(patrimony) {
  patrimony.id = patrimonies.length
    ? Math.max(...patrimonies.map((x) => x.id)) + 1
    : 1;

  patrimonies.push(patrimony);

  saveData();
}

function update(id, params) {
  const patrimony = patrimonies.find((x) => x.id.toString() === id.toString());

  Object.assign(patrimony, params);
  saveData();
}

function _delete(id) {
  patrimonies = patrimonies.filter((x) => x.id.toString() !== id.toString());
  saveData();
}

function saveData() {
  fs.writeFileSync(
    `${process.cwd()}/json/patrimony.json`,
    JSON.stringify(patrimonies, null, 4)
  );
}
