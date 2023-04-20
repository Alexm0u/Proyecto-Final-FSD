const userController = require("../controllers/userController");
const verifyToken = require("../middlewares/verifyToken");
const router = require("express").Router();

router.post("/user", userController.newUser);
router.get("/user", userController.getAllUser);
router.put("/user/update/",verifyToken, userController.updateUser,);

module.exports = router;