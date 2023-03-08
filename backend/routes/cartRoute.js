const {
  getAllCart,
  addNewCart,
  deleteCart,
} = require("../controller/cartController");
const { isAuthenticatedUser } = require("../middleware/auth");

const router = require("express").Router();

router
  .route("/mycarts")
  .get(isAuthenticatedUser, getAllCart)
  .post(isAuthenticatedUser, addNewCart)
  .delete(isAuthenticatedUser, deleteCart);

module.exports = router;
