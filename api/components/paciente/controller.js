const store = require("./store");

async function createPaciente(paciente) {
  await store.create(paciente);
}
async function getPacientes() {
  const pacientes = await store.get();
  var pacientesToReturn = [];
  for (const paciente of pacientes) {
    const { username, nombre, email } = paciente.dataValues;
    pacientesToReturn.push({
      username,
      nombre,
      email,
    });
  }
  return pacientesToReturn;
}
async function getPacienteByUsername(usernameParam) {
  const { username, nombre, email } = await store.getByUsername(usernameParam);
  return {
    username,
    nombre,
    email,
  };
}
async function deletePaciente(username) {
  await store.delete(username);
}
async function updatePaciente(username, pacienteData) {
  await store.update(username, pacienteData);
}

module.exports = {
  createPaciente,
  getPacienteByUsername,
  getPacientes,
  deletePaciente,
  updatePaciente,
};
