const router = require("express").Router()
const authController = require("../controllers/auth")
const verifyToken = require('../middleware/auth');

router.post("/login", authController.login)
router.post("/register", authController.register)
router.post('/token', authController.token);
router.post('/logout', verifyToken, authController.logout);


module.exports = router;