const router = require("express").Router()
const bodyCompController = require("../controllers/bodyComp")

router.post("/savebodycomp", bodyCompController.saveBodyComp)


module.exports = router;