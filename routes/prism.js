const router = require("express").Router()
const prismController = require("../controllers/prism")
const verifyToken = require("../middleware/auth")
const { filterUpdateData } = require("../middleware/prism")

router.get("/path", verifyToken, prismController.getPrismByPath)
router.post("/saveprism", verifyToken, prismController.savePrism)
router.delete("/delete", verifyToken, prismController.deletePrism)
router.post("/deletes", verifyToken, prismController.deleteMultiPrism)
router.put("/update", verifyToken, filterUpdateData, prismController.updatePrism)



module.exports = router;