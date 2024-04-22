const {
  logOut
} = require("../controllers/userController");

const router = require("express").Router();

router.get("/logout/:id", logOut);

module.exports = router;
