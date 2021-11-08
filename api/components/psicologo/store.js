const Model = require("./model");

async function createPsicologo(newPsicologo) {
  await Model.create(newPsicologo);
}

async function getPsicologos() {
  const psicologos = await Model.findAll();
  return psicologos;
}

async function getPsicologoByUsername(username) {
  const psicologo = await Model.findOne({
    where: { username },
  });
  return psicologo;
}

async function deletePsicologo(username) {
  await Model.destroy({
    where: { username },
  });
}

async function updatePsicologo(username, psicologoData) {
  const psicologoToUpdate = await Model.findOne({
    where: { username },
  });
  if (psicologoToUpdate) {
    await psicologoToUpdate.update(psicologoData);
  }
}

module.exports = {
  create: createPsicologo,
  get: getPsicologos,
  getByUsername: getPsicologoByUsername,
  delete: deletePsicologo,
  update: updatePsicologo,
};
