const express = require("express");
const router = express.Router();
const userService = require("../services/userService");

// Authentication endpoint
router.post("/authenticate", (req, res) => {
  const { username, password } = req.body;
  try {
    userService.loginUser(username, password);
    res.status(200).send("Autenticação realizada com sucesso");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
