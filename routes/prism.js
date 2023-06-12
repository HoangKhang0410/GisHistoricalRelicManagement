const router = require("express").Router()
const prismController = require("../controllers/prism")

router.get("/path", prismController.getPrismByPath)


module.exports = router;