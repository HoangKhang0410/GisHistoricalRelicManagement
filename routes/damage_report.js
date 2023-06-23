const router = require("express").Router()
const damageReportController = require("../controllers/damage_report")

router.get("/", damageReportController.getAllDamageReport)
router.post("/create", damageReportController.saveDamageReport)
router.delete("/delete/:id", damageReportController.deleteDamageReport)


module.exports = router;