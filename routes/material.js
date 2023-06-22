const router = require("express").Router()
const materialController = require("../controllers/material")
const verifyToken = require("../middleware/auth")

router.get("/", verifyToken, materialController.getAllMaterial)
router.get("/:id", verifyToken, materialController.getMaterialByID)
router.post("/create", verifyToken, materialController.saveMaterial)
router.patch("/update", verifyToken, materialController.updateMaterial)
router.delete("/delete/:id", verifyToken, materialController.deleteMaterialByID)


module.exports = router;