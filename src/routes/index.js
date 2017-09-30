const app = require("express");
const router = app.Router();

const dailyRoutes = require("./daily");
const currentRoutes = require("./current");
const geoDataRoutes = require("./geo-data");

router.use("/daily", dailyRoutes);
router.use("/current", currentRoutes);
router.use("/geo-data", geoDataRoutes);

module.exports = router;
