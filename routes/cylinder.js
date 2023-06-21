const router = require("express").Router()
const cylinderController = require("../controllers/cylinder")
const { filterUpdateData } = require("../middleware/cylinder")

router.get("/path", cylinderController.getCylinderByPath)
router.post("/savecylinder", cylinderController.saveCylinder)
router.delete("/delete", cylinderController.deleteCylinder)
router.put("/update", filterUpdateData, cylinderController.updateCylinder)
router.put("/addMaterialForMultiCylinder", cylinderController.addMaterialForManyCylinder)

module.exports = router;