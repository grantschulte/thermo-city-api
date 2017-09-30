const app = require("express");
const router = app.Router();

router.get("/", (req, res) => {
  res.send("Daily Route: Index");
});

module.exports = router;
