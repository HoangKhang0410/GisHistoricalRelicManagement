const router = require("express").Router()
const damageReportController = require("../controllers/damage_report")
const verifyToken = require("../middleware/auth")

router.get("/", verifyToken, damageReportController.getAllDamageReport)
router.post("/create", verifyToken, damageReportController.saveDamageReport)
router.delete("/delete/:id", verifyToken, damageReportController.deleteDamageReport)


module.exports = router;