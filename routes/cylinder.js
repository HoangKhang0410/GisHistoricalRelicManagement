const router = require("express").Router()
const cylinderController = require("../controllers/cylinder")
const verifyToken = require("../middleware/auth")
const { filterUpdateData } = require("../middleware/cylinder")

router.get("/path", verifyToken, cylinderController.getCylinderByPath)
router.post("/savecylinder", verifyToken, cylinderController.saveCylinder)
router.delete("/delete", verifyToken, cylinderController.deleteCylinder)
router.put("/update", verifyToken, filterUpdateData, cylinderController.updateCylinder)
router.put("/addMaterialForMultiCylinder", verifyToken, cylinderController.addMaterialForManyCylinder)

module.exports = router;