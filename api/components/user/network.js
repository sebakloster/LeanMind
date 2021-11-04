const express = require("express");
const response = require("../../../network/response");
const router = express.Router();
const controller = require("./controller");

router.get("/", function (req, res, next) {
  controller
    .getUsers()
    .then((users) => {
      response.success(req, res, users, 200);
    })
    .catch(next);
});

router.delete("/:username", function (req, res, next) {
  controller
    .deleteUser(req.params.username)
    .then(() => {
      response.success(
        req,
        res,
        `User ${req.params.username} has been deleted`,
        200
      );
    })
    .catch(next);
});

router.get("/:username", function (req, res, next) {
  controller
    .getUserByUsername(req.params.username)
    .then((user) => {
      response.success(req, res, user, 200);
    })
    .catch(next);
});

router.post("/sign-up", function (req, res, next) {
  controller
    .createUser(req.body)
    .then(() => {
      response.success(req, res, "User created", 201);
    })
    .catch(next);
});

router.patch("/:username", function (req, res, next) {
  controller
    .updateUser(req.params.username, req.body)
    .then(() => {
      response.success(req, res, `User ${req.params.username} updated`, 200);
    })
    .catch(next);
});

module.exports = router;
