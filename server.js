const app  = require("./src");
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server listening on ${port}.`);
});

module.exports = app;
