const express = require("express");
const response = require("../../../network/response");
const router = express.Router();
const controller = require("./controller");

router.get("/", function (req, res, next) {
  controller
    .getPacientes()
    .then((pacientes) => {
      response.success(req, res, pacientes, 200);
    })
    .catch(next);
});

router.delete("/:username", function (req, res, next) {
  controller
    .deletePaciente(req.params.username)
    .then(() => {
      response.success(
        req,
        res,
        `Paciente ${req.params.username} has been deleted`,
        200
      );
    })
    .catch(next);
});

router.get("/:username", function (req, res, next) {
  controller
    .getPacienteByUsername(req.params.username)
    .then((paciente) => {
      response.success(req, res, paciente, 200);
    })
    .catch(next);
});

router.post("/sign-up", function (req, res, next) {
  controller
    .createPaciente(req.body)
    .then(() => {
      response.success(req, res, "Paciente created", 201);
    })
    .catch(next);
});

router.patch("/:username", function (req, res, next) {
  controller
    .updatePaciente(req.params.username, req.body)
    .then(() => {
      response.success(
        req,
        res,
        `Paciente ${req.params.username} updated`,
        200
      );
    })
    .catch(next);
});

module.exports = router;
