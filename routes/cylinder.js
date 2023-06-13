const router = require("express").Router()
const cylinderController = require("../controllers/cylinder")

router.get("/path", cylinderController.getCylinderByPath)


module.exports = router;