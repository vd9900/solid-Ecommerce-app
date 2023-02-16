const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const ApiFeatures = require("../utils/apifeatures/apifeatures");
// GET

exports.getAllProducts = async (req, res) => {
  const ApiFeature = new ApiFeatures(Product.find(), req.query.keyword);
  const products = await Product.find();
  res.status(200).json({ products });
};

exports.getProductDetails = catchAsyncError(async (req, res, next) => {
  const product = await Product.findById(req.query.id);
  if (!product) {
    return next(new ErrorHandler("Proudct not found", 404));
  }
  res.status(200).json({
    message: product,
    success: true,
  });
});

// Create Product

exports.createProduct = catchAsyncError(async (req, res, next) => {
  req.body.user = req.user._id;
  console.log(req.body);
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
});

// Update Product

exports.updateProduct = catchAsyncError(async (req, res, next) => {
  let product = Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Proudct not found", 404));
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
});

// Delete Product

exports.deleteProduct = async (req, res, next) => {
  let product = await Product.findById(req.query.id);
  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product not founded",
    });
  }
  await product.remove();
  res.status(200).json({
    success: true,
    message: "Product deleted",
  });
};

// create new review or update review

exports.createProductReview = async (req, res) => {
  const { rating, comment, productId } = req.body;
  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment,
    productId,
  };
  const product = await Product.findById(productId);
  const isReviewed = product.reviews.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );

  if (isReviewed) {
    product.reviews.forEach((rev) => {
      if (rev.user.toString() === req.user._id.toString()) {
        (rev.rating = rating), (rev.comment = comment);
      }
    });
  } else {
    product.reviews.push(review);
    product.numberOfReviews = product.reviews.length;
  }
  let avg = 0;

  product.reviews.forEach((rev) => {
    avg += rev.rating;
  });
  product.ratings = avg / product.reviews.length;

  await product.save({ validateBeforeSave: false });

  res.status(200).json({ success: true });
};
