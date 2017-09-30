const app = require("express");
const router = app.Router();

router.get("/", (req, res) => {
  res.send("Current Route: Index");
});

module.exports = router;
