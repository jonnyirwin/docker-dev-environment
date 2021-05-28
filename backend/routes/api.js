var express = require("express");
var router = express.Router();

/* GET api listing. */
router.get("/names", function (req, res, next) {
  res.send(["Bob Bobbins", "Joe Small", "Hector Babbage"]);
});

module.exports = router;
