const router = require("express").Router()
const notificationController = require("../controllers/notification");

router.get("/", notificationController.getAllNotification)


module.exports = router;