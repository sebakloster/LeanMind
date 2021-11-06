const pacientes = require("../api/components/paciente/network");

const routes = function (server) {
  server.use("/pacientes", pacientes);
};

module.exports = routes;
