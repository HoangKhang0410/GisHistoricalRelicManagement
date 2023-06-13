const router = require("express").Router()
const bodyComplexController = require("../controllers/body_complex")

router.get("/path", bodyComplexController.getBodyComplexByPath)
router.post("/savebodycomp", bodyComplexController.saveBodyComp)
router.delete("/delete", bodyComplexController.deleteBodyComp)


module.exports = router;