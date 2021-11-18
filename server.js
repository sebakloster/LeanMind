const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const router = require("./network/routes");
const dbConfig = require("./config").db;
const sequelize = require("./db")(dbConfig);
const errors = require("./network/errors");
const path = require("path");

require("./api/associations");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Statics
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

// Cargamos el ruteo
router(app);

app.use((req, res, next) => {
  res.status(404).render("404");
});

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
