const router = require("express").Router()
const prismController = require("../controllers/prism")

router.post("/saveprism", prismController.savePrism)


module.exports = router;