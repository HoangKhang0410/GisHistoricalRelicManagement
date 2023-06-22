const router = require("express").Router()
const bodyComplexController = require("../controllers/body_complex")
const { filterUpdateData } = require("../middleware/bodyComp")
const verifyToken = require('../middleware/auth');

router.get("/path", verifyToken, bodyComplexController.getBodyComplexByPath)
router.post("/savebodycomp", verifyToken, bodyComplexController.saveBodyComp)
router.delete("/delete", verifyToken, bodyComplexController.deleteBodyComp)
router.put("/update", verifyToken, filterUpdateData, bodyComplexController.updateBodyComp)
router.put("/addMaterialForMultiBodyComp", verifyToken, bodyComplexController.addMaterialForManyBodyComp)


module.exports = router;