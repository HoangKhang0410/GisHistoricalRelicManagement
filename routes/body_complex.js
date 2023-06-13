const router = require("express").Router()
const bodyComplexController = require("../controllers/body_complex")

router.get("/path", bodyComplexController.getBodyComplexByPath)


module.exports = router;