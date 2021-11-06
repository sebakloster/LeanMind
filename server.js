const express = require("express");
const app = express();
const router = require("./network/routes");
const { NODE_ENV } = process.env;
const dbConfig = require("./config").db;
const sequelize = require("./db")(dbConfig);
const errors = require("./network/errors");

require("./api/associations");

app.use(express.json());

router(app);

//Error middleware (last)
app.use(errors);

const server = app.listen(3000, function () {
  console.log("App listening on port 3000");

  (async () => {
    //await sequelize.sync({ force: true });
    console.log("Successfully conected to database");
  })();
});

module.exports = { app, server };
