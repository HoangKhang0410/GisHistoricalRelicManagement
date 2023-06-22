const router = require("express").Router()
const notificationController = require("../controllers/notification");
const verifyToken = require("../middleware/auth");

router.get("/", verifyToken, notificationController.getAllNotification)


module.exports = router;