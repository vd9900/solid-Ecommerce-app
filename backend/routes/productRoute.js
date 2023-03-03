const Express = require("express");
const {
  getAllProducts,
  createProduct,
  deleteProduct,
  getProductDetails,
  createProductReview,
} = require("../controller/productController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = Express.Router();

router.route("/products").get(isAuthenticatedUser, getAllProducts);

router
  .route("/admin/product/new")
  .post(
    isAuthenticatedUser,
    authorizeRoles("admin"),
    isAuthenticatedUser,
    createProduct
  );

router
  .route("/admin/product/")
  .put(isAuthenticatedUser, authorizeRoles("admin"), createProduct)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);

router.route("/product/").get(getProductDetails);

router.route("/review").put(isAuthenticatedUser, createProductReview);

module.exports = router;
