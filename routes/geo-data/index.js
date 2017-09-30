const app = require("express");
const router = app.Router();

router.get("/", (req, res) => {
  res.send("Geo Data Route: Index");
});

module.exports = router;
