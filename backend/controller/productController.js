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
    //send reslut based search
    if (req.query.search) {
      match.$or = [
        {
          name: new RegExp(req.query.search, "i"),
        },
        { searchKeywords: new RegExp(req.query.search, "i") },
        {
          category: new RegExp(req.query.search, "i"),
        },
      ];
    }
    const minPriceValue = await Product.find(match)
      .sort({ price: 1 })
      .limit(1)
      .catch((err) => 0);
    const maxPriceValue = await Product.find(match)
      .sort({ price: -1 })
      .limit(1)
      .catch((erro) => 10000);
    // console.log(maxPriceValue, minPriceValue);
    if (req.query.price) {
      match.price = {};
      match.price["$gte"] = req.query?.price?.gte;
      match.price["$lte"] = req.query?.price?.lte;
      match.ratings = {};
      match.ratings["$gte"] = req.query?.rating?.gte || 0;
      match.ratings["$lte"] = req.query?.rating?.lte || 5;
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
    let query;
    //when fetch all products send the data with category and limited 10
    if (req.query.search) {
      query = Product.find(match).sort(Checksort);
    } else {
      query = Product.aggregate([
        { $group: { _id: "$category", docs: { $push: "$$ROOT" } } },
        {
          $project: {
            _id: 0,
            category: "$_id",
            products: { $slice: ["$docs", 4] },
          },
        },
      ]);
    }

    if (req.query.page && req.query.limit) {
      productCount = await Product.countDocuments(match);
      // const queryCount = await Product.countDocuments();
      const skip = (page - 1) * req.query.limit;
      query = query.skip(skip).limit(req.query.limit || 10);
      paginationCount = Math.ceil(productCount / req.query.limit);
    }
    const products = await query;
    // console.log(products);
    res.status(200).json({
      products: products,
      minPriceValue: minPriceValue[0]?.price || 10,
      maxPriceValue: maxPriceValue[0]?.price || 100000,
      pageNumber: page,
      paginationCount: paginationCount || "no page",
    });
  } catch (error) {
    // console.log(match);
    console.log(error);
    res.status(404).json({ message: error });
  }
};

exports.getProductDetails = catchAsyncError(async (req, res, next) => {
  // console.log(req.query.id);
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
  // console.log(req.body);
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
  // console.log(req.body);
  // console.log(req.user);
  const review = {
    user: req.user._id,
    name: req.user.username,
    rating: req.body.rating,
    comment: req.body.comment,
  };
  try {
    const product = await Product.findById(req.body.productId);

    product.reviews.push(review);
    product.numberOfReviews = product.reviews.length;

    let avg = 0;

    product.reviews.forEach((rev) => {
      console.log(rev.rating);
      avg = avg += rev.rating;
    });
    product.ratings = Math.ceil(avg / product.reviews.length);

    await product.save({ validateBeforeSave: false });

    res.status(200).json({ success: true, message: "review posted" });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};
