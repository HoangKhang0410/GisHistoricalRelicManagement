const router = require("express").Router()
const materialController = require("../controllers/material")

router.get("/", materialController.getAllMaterial)
router.get("/:id", materialController.getMaterialByID)
router.post("/create", materialController.saveMaterial)
router.patch("/update", materialController.updateMaterial)
router.delete("/delete/:id", materialController.deleteMaterialByID)


module.exports = router;