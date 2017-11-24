const router  = require("express").Router();
const request = require("request");
const apiRoot = process.env.GOOGLE_GEOCODE_API_URL;
const apiKey  = process.env.GOOGLE_GEOCODE_API_KEY;

router.get("/", (req, res, next) => {
  const url = `${apiRoot}?latlng=${req.query.coords}&result_type=neighborhood|street_address&key=${apiKey}`;

  console.log("URL", url);

  request(url, (err, response, body) => {
    if (err) {
      return next(err);
    }

    let data = JSON.parse(body);

    console.log("GEO DATA", data);

    if (!data.results.length) {
      return next(err);
    }

    res.json({ address: data.results[0].formatted_address });
  });
});

module.exports = router;
