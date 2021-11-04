const Model = require("./model");

async function createUser(newUser) {
  await Model.create(newUser);
}

async function getUsers() {
  const users = await Model.findAll();
  return users;
}

async function getUserByUsername(username) {
  const user = await Model.findOne({
    where: { username },
  });
  return user;
}

async function deleteUser(username) {
  await Model.destroy({
    where: { username },
  });
}

async function updateUser(username, userData) {
  const userToUpdate = await Model.findOne({
    where: { username },
  });
  if (userToUpdate) {
    await userToUpdate.update(userData);
  }
}

module.exports = {
  create: createUser,
  get: getUsers,
  getByUsername: getUserByUsername,
  delete: deleteUser,
  update: updateUser,
};
