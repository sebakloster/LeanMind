const express = require("express");
const response = require("../../../network/response");
const router = express.Router();
const controller = require("./controller");

router.get("/", function (req, res, next) {
  controller
    .getPsicologos()
    .then((psicologos) => {
      response.success(req, res, psicologos, 200);
    })
    .catch(next);
});

router.delete("/:username", function (req, res, next) {
  controller
    .deletePsicologo(req.params.username)
    .then(() => {
      response.success(
        req,
        res,
        `Psicologo ${req.params.username} has been deleted`,
        200
      );
    })
    .catch(next);
});

router.get("/:username", function (req, res, next) {
  controller
    .getPsicologoByUsername(req.params.username)
    .then((psicologo) => {
      response.success(req, res, psicologo, 200);
    })
    .catch(next);
});

router.post("/sign-up", function (req, res, next) {
  controller
    .createPsicologo(req.body)
    .then(() => {
      response.success(req, res, "Psicologo created", 201);
    })
    .catch(next);
});

router.patch("/:username", function (req, res, next) {
  controller
    .updatePsicologo(req.params.username, req.body)
    .then(() => {
      response.success(
        req,
        res,
        `Psicologo ${req.params.username} updated`,
        200
      );
    })
    .catch(next);
});

module.exports = router;
