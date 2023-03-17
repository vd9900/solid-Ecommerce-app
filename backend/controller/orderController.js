const Order = require("../models/orderModel");
const Product = require("../models/productModel");

//create new order

exports.newOrder = async (req, res) => {
  console.log(req.body);
  console.log("lsdkfl");
  const newOrder = await Order.create({
    fullname: req.body.fullname,
    shippingInfo: {
      address: req.body.address,
      city: req.body.city,
      country: req.body.country,
    },
    orderItems: req.body.products,
    user: req.user._id,
    totalPaid: req.body.total,
  });

  res.status(201).json({
    sucess: true,
    data: newOrder,
  });
};

//get single order

exports.getOneOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.query.order);

    if (!order)
      return res.status(404).json({ success: false, error: "Order not exist" });

    res.status(200).json({
      sucess: true,
      message: order,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error: error,
    });
  }
};

//get login user order
exports.myOrders = async (req, res) => {
  try {
    const order = await Order.find({ user: req.user._id }).select([
      "fullname",
      "_id",
      "createdAt",
    ]);
    if (!order)
      return res
        .status(404)
        .json({ success: false, message: "Order not exist" });

    res.status(200).json({
      sucess: true,
      message: order,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

//get all order (admin)

exports.getAllOrders = async (req, res) => {
  const orders = await Order.find();

  if (!orders) return res.status(404).json("Order not exist");

  const totalAmount = 0;
  orders.forEach((order) => {
    totalAmount += order.totalPrice;
  });

  res.status(200).json({
    sucess: true,
    orders,
    totalAmount,
  });
};

// update order status (admin)

exports.updateOrders = async (req, res) => {
  const order = await Order.findById(req.query.id);

  if (!order) return res.status(404).json("Order not exist");

  if (order.orderStatus === "Delivered") {
    return res.status(400).json("you have already delivered this order");
  }

  order.orderItems.forEach(async (order) => {
    await updateStock(order.product, order.quantity);
  });

  order.orderStatus = req.body.status;

  if (req.body.status === "Delivered") {
    order.deliveredAt = Date.now();
  }

  await order.save({ validateBeforeSave: false });

  res.status(200).json({
    sucess: true,
  });
};

async function updateStock(id, quantity) {
  const product = await Product.findById(id);
  product.stock -= quantity;
  await product.save({ validateBeforeSave: false });
}

//delete order (admin)

exports.deleteOrders = async (req, res) => {
  const orders = await Order.findById(req.query.id);

  if (!orders) return res.status(404).json("Order not exist");
  await orders.remove();

  res.status(200).json({
    sucess: true,
  });
};
