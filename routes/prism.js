const router = require("express").Router()
const prismController = require("../controllers/prism")

router.get("/path", prismController.getPrismByPath)
router.post("/saveprism", prismController.savePrism)


module.exports = router;