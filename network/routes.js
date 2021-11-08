const pacientes = require("../api/components/paciente/network");
const psicologos = require("../api/components/psicologo/network");

const routes = function (server) {
  server.use("/pacientes", pacientes);
  server.use("/psicologos", psicologos);
};

module.exports = routes;
