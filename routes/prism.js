const router = require("express").Router()
const prismController = require("../controllers/prism")
const { filterUpdateData } = require("../middleware/prism")

router.get("/path", prismController.getPrismByPath)
router.post("/saveprism", prismController.savePrism)
router.delete("/delete", prismController.deletePrism)
router.post("/deletes", prismController.deleteMultiPrism)
router.put("/update", filterUpdateData, prismController.updatePrism)



module.exports = router;