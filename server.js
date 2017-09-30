const app = require("express")();
const cors = require("cors");
const config = require("dotenv").config();
const routes = require("./routes");
const port = config.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Thermo City API: Home");
});

app.use("/", routes);

app.listen(port, () => {
  console.log(`Server listening on ${port}.`);
});
