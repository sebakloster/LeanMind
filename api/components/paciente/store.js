const Model = require("./model");

async function createPaciente(newPaciente) {
  await Model.create(newPaciente);
}

async function getPacientes() {
  const pacientes = await Model.findAll();
  return pacientes;
}

async function getPacienteByUsername(username) {
  const paciente = await Model.findOne({
    where: { username },
  });
  return paciente;
}

async function deletePaciente(username) {
  await Model.destroy({
    where: { username },
  });
}

async function updatePaciente(username, pacienteData) {
  const pacienteToUpdate = await Model.findOne({
    where: { username },
  });
  if (pacienteToUpdate) {
    await pacienteToUpdate.update(pacienteData);
  }
}

module.exports = {
  create: createPaciente,
  get: getPacientes,
  getByUsername: getPacienteByUsername,
  delete: deletePaciente,
  update: updatePaciente,
};
