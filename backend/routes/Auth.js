const express = require("express");
const routes = express.Router();
const { createAccount } = require("../controller/Auth");

routes.route("/userCreate").post(createAccount);

module.exports = routes;
