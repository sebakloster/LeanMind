const express = require("express");
const app = express();
const router = require("./network/routes");
const dbConfig = require("./config").db;
const sequelize = require("./db")(dbConfig);
const errors = require("./network/errors");

require("./api/associations");

app.use(express.json());

// Template engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// Statics

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("index", { titulo: "inicio EJS" });
});

app.use((req, res, next) => {
  res.status(404).render("404");
});

// Cargamos el ruteo
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
