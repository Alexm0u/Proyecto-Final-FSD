const userController = require("../controllers/userController");
const verifyToken = require('../middlewares/verifyToken');
const isAdmin = require('../middlewares/isAdmin');
const isStaff = require('../middlewares/isStaff');
const router = require("express").Router();

router.post("/user", userController.newUser);
router.get("/user/all", verifyToken, isAdmin, userController.getAllUser);
router.put("/user/update/",verifyToken, userController.updateUser,);
router.get("/user/findAllUsersMechanic", verifyToken, isStaff, userController.findAllUsersMechanic);
router.get("/user/profile", verifyToken, userController.getUserbyId);
router.get("/user/myprofile", verifyToken, userController.getMyUser);




module.exports = router;