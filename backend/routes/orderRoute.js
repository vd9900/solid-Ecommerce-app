const router = require("express").Router();
const {
  newOrder,
  getOneOrder,
  myOrders,
  getAllOrders,
  updateOrders,
  deleteOrders,
} = require("../controller/orderController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/order/new").post(isAuthenticatedUser, newOrder);

router.route("/order/").get(isAuthenticatedUser, getOneOrder);

router.route("/myorders").get(isAuthenticatedUser, myOrders);

router
  .route("/admin/orders")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAllOrders);

router
  .route("/admin/order")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateOrders)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteOrders);

module.exports = router;
