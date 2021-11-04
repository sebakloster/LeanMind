const users = require("../api/components/user/network");

const routes = function (server) {
  server.use("/users", users);
};

module.exports = routes;
