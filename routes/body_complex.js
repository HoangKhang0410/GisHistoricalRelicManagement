const router = require("express").Router()
const bodyComplexController = require("../controllers/body_complex")
const { filterUpdateData } = require("../middleware/bodyComp")

router.get("/path", bodyComplexController.getBodyComplexByPath)
router.post("/savebodycomp", bodyComplexController.saveBodyComp)
router.delete("/delete", bodyComplexController.deleteBodyComp)
router.put("/update", filterUpdateData, bodyComplexController.updateBodyComp)
router.put("/addMaterialForMultiBodyComp", bodyComplexController.addMaterialForManyBodyComp)


module.exports = router;