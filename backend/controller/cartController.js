const { default: mongoose } = require("mongoose");
const Cart = require("../models/cartModel");
const products = require("../models/productModel");
exports.getAllCart = async (req, res) => {
  const newCart = await Cart.findOne({ user: req.user._id });
  if (newCart) {
    Cart.findOne({ user: req.user._id })
      .populate("cartProducts.product", "_id name price productPictures")
      .exec((error, cart) => {
        if (error) return res.status(400).json({ error });
        if (cart) {
          let cartItems = [];
          cart.cartProducts.forEach((item, index) => {
            cartItems.push({
              _id: item.product._id.toString(),
              name: item.product.name,
              price: item.product.price,
              qty: item.quantity,
            });
          });
          res.status(200).json(cartItems);
        }
      });
  } else {
    res.status(400).json({ error: "cart is empty" });
  }
};

exports.addNewCart = async (req, res) => {
  Cart.findOne({ user: req.user._id }).exec((err, cart) => {
    //checking already exists or not

    if (cart) {
      const isProductPresent = cart.cartProducts.some((cp) => {
        return cp.product == req.body.product;
      });
      if (isProductPresent) {
        res.status(401).json("already added on cart");
      } else {
        Cart.findOneAndUpdate(
          { user: req.user._id },
          {
            $push: {
              cartProducts: { product: req.body.product },
            },
          }
        )
          .then((cart) => res.json(cart))
          .catch((err) => res.json(err));
      }
    } else {
      //if not exists
      const cart = new Cart({
        user: req.user._id,
        cartProducts: [{ product: req.body.product }],
      });
      cart.save((err, cart) => {
        console.log(err);
        if (err) return res.status(400).json({ err });
        if (cart) {
          return res.status(201).json({ cart });
        }
      });
    }
  });
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
