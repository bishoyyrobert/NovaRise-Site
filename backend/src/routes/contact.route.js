const express = require('express');

const router = express.Router();

const validateContact = require("../middlewares/validatContact.middlewares");

const messages = [];


router.post("/", validateContact, (req, res) => {
  const newMessage = {
    id: messages.length + 1,
    name: req.body.name,
    email: req.body.email,
    message: req.body.message
  };

  messages.push(newMessage);

  res.status(201).json({
    message: "Message sent successfully",
    data: newMessage
  });
});

module.exports = router;