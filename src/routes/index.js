const app = require("express");
const router = app.Router();

const alertsRoutes = require("./alerts");
const dailyRoutes = require("./daily");
const currentlyRoutes = require("./currently");
const hourlyRoutes = require("./hourly");
const geoDataRoutes = require("./geo-data");

router.use("/alerts", alertsRoutes);
router.use("/daily", dailyRoutes);
router.use("/currently", currentlyRoutes);
router.use("/hourly", hourlyRoutes);
router.use("/geo-data", geoDataRoutes);


module.exports = router;
