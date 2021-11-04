const store = require("./store");

async function createUser(user) {
  await store.create(user);
}
async function getUsers() {
  const users = await store.get();
  var usersToReturn = [];
  for (const user of users) {
    const { username, name, email } = user.dataValues;
    usersToReturn.push({
      username,
      name,
      email,
    });
  }
  return usersToReturn;
}
async function getUserByUsername(usernameParam) {
  const { username, name, email } = await store.getByUsername(usernameParam);
  return {
    username,
    name,
    email,
  };
}
async function deleteUser(username) {
  await store.delete(username);
}
async function updateUser(username, userData) {
  await store.update(username, userData);
}

module.exports = {
  createUser,
  getUserByUsername,
  getUsers,
  deleteUser,
  updateUser,
};
