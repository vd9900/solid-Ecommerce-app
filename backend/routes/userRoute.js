const router = require("express").Router();
const {
  registerUser,
  loginUser,
  logout,
  forgotPassword,
  getuserDetail,
  getUserForgotDetail,
  updateProfile,
  getAllUser,
  getOneUser,
  checkOTP,
} = require("../controller/userController");

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/password/forgot").post(forgotPassword);

router.route("/logout").get(logout);

router.route("/me").get(isAuthenticatedUser, getuserDetail);

router.route("/password/forgot/checkotp").post(checkOTP);

router.route("/me/update").put(isAuthenticatedUser, updateProfile);

router
  .route("/admin/users")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAllUser);

router
  .route("/admin/user")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getOneUser);

module.exports = router;
