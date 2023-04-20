const { default: mongoose } = require("mongoose");
const Cart = require("../models/cartModel");
const products = require("../models/productModel");
exports.getAllCart = async (req, res) => {
  const newCart = await Cart.findOne({ user: req.user._id });
  if (newCart) {
    try {
      Cart.findOne({ user: req.user._id })
        .populate(
          "cartProducts.product",
          "_id name price images ratings  numberOfReviews"
        )
        .exec((error, cart) => {
          if (error) return res.status(400).json({ error });
          if (cart) {
            let cartItems = [];
            cart.cartProducts.forEach((item, index) => {
              // console.log(item);
              cartItems.push({
                _id: item.product._id.toString(),
                name: item.product.name,
                image: item.product.images[0],
                price: item.product.price,
                qty: item.quantity,
                rating: item.product.ratings, // corrected
                numberOfReviews: item.product.numberOfReviews, // corrected
              });
            });
            // console.log(cartItems);
            res.status(200).json(cartItems);
          }
        });
    } catch (error) {
      console.log(error);
      res.status(500).josn({ success: false, error });
    }
  } else {
    res.status(400).json({ error: "cart is empty" });
  }
};

exports.addNewCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id });
    if (cart) {
      const isProductPresent = cart.cartProducts.some((cp) => {
        return cp.product == req.body.product;
      });
      if (isProductPresent) {
        return res.status(401).json("Product already added to cart");
      } else {
        cart.cartProducts.push({ product: req.body.product });

        const updatedCart = await cart.save();
        return res.json(updatedCart);
      }
    } else {
      // console.log("debug");
      const newCart = new Cart({
        user: req.user._id,
        cartProducts: [{ product: req.body.product }],
      });
      const savedCart = await newCart.save();
      return res.status(201).json(savedCart);
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json("Internal server error");
  }
};

exports.deleteCart = async (req, res) => {
  // console.log(req.query);
  if (req.query.id) {
    const newCart = await Cart.updateOne(
      { user: req.user._id },
      {
        $pull: {
          cartProducts: { product: req.query.id },
          // 'cartProducts[product]':req.query.id
        },
      }
    );
    // ).exec((error, result) => {
    //   if (error) return res.status(400).json({ error });
    //   if (result) {
    //     res.status(202).json({ result });
    //   }
    // });
    res.json("ok");
  }
};
