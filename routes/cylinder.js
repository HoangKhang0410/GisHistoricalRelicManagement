const router = require("express").Router()
const cylinderController = require("../controllers/cylinder")

router.get("/path", cylinderController.getCylinderByPath)
router.post("/savecylinder", cylinderController.saveCylinder)
router.delete("/delete", cylinderController.deleteCylinder)


module.exports = router;