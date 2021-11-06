const store = require("./store");

async function createPsicologo(psicologo) {
  await store.create(psicologo);
}
async function getPsicologos() {
  const psicologos = await store.get();
  var psicologosToReturn = [];
  for (const psicologo of psicologos) {
    const { username, nombre, email } = psicologo.dataValues;
    psicologosToReturn.push({
      username,
      nombre,
      email,
    });
  }
  return psicologosToReturn;
}
async function getPsicologoByUsername(usernameParam) {
  const { username, nombre, email } = await store.getByUsername(usernameParam);
  return {
    username,
    nombre,
    email,
  };
}
async function deletePsicologo(username) {
  await store.delete(username);
}
async function updatePsicologo(username, psicologoData) {
  await store.update(username, psicologoData);
}

module.exports = {
  createPsicologo,
  getPsicologoByUsername,
  getPsicologos,
  deletePsicologo,
  updatePsicologo,
};
