const router  = require("express").Router();
const request = require("request");
const apiRoot = process.env.DS_API_URL;
const apiKey  = process.env.DS_API_KEY;

router.get("/", (req, res, next) => {
  const params = "?exclude=[minutely,daily,hourly,flags]";
  const url = `${apiRoot}/forecast/${apiKey}/${req.query.coords}${params}`;

  request(url, (err, response, body) => {
    if (err) {
      return next(err);
    }

    let data = JSON.parse(body);
    res.json(data.currently);
  });
});

module.exports = router;
