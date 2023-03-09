const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const ApiFeatures = require("../utils/apifeatures/apifeatures");
// GET

exports.getAllProducts = async (req, res) => {
  let match = {};
  let page = req.query?.page;
  let paginationCount;
  try {
    //send reslut based category
    if (req.query.category) {
      match.category = req.query?.category;
      match.price = {};
      match.price["$gte"] = req.query.price?.gte || 0;
      match.price["$lte"] = req.query.price?.lte || 100000;
    }
    //send reslut based search
    if (req.query.search) {
      match.searchKeywords = {
        $regex: req.query.search,
        $options: "i",
      };
      match.price = {};
      match.price["$gte"] = req.query?.price?.lte || 0;
      match.price["$lte"] = req.query?.price?.lte || 100000;
    }
    //send reslut based sort
    Checksort = {};
    const sortValue = [
      {
        name: "all",
        value: "",
      },
      {
        name: "h_l",
        by: "price",
        value: -1,
      },
      {
        name: "l_h",
        by: "price",
        value: 1,
      },
      {
        name: "n_o",
        by: "createdAt",
        value: -1,
      },
      {
        name: "o_n",
        by: "createdAt",
        value: 1,
      },
    ];
    if (req.query.sort) {
      //get the query from sortValues
      const requestForSort = sortValue.filter((value, i) => {
        return value.name === req.query.sort;
      });

      // only do if query is not "all"
      if (requestForSort.length !== 0) {
        Checksort[requestForSort[0].by] = requestForSort[0].value;
      }
    }

    // for pagination

    if (req.query.page && req.query.limit) {
      // const queryCount = await query.countDocuments().lean();
      const skip = (page - 1) * req.query.limit;
      query = Pquery.skip(skip).limit(req.query.limit || 10);
      // paginationCount = Math.ceil(queryCount / req.query.limit);
    } else {
      let products = Product.find(match).sort(Checksort);

      res.status(200).json({
        products: products,
        pageNumber: page,
        paginationCount: paginationCount || "no page",
      });
    }
  } catch (error) {
    // console.log(match);
    console.log(error);
    res.status(404).json({ message: error });
  }
};

exports.getProductDetails = catchAsyncError(async (req, res, next) => {
  console.log(req.query.id);
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
