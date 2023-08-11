const asyncHandler = require("../middleware/asyncHandler");
const Order = require("../models/order.model.js");

exports.postOrder = asyncHandler(async (req, res, next) => {
  const { orderItems, totalPrice } = req.body;
  const userId = req.user.id;
  try {
    const order = new Order({
      user: userId,
      orderItems: orderItems,
      totalPrice: totalPrice,
    });
    const createdOrder = await order.save();
    res.status(201).json({
      success: "true",
      message: "Order placed successfully",
      order: createdOrder,
    });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({
      success: "false",
      error: "Error placing order",
    });
  }
});

exports.getOrders = asyncHandler(async (req, res, next) => {
  const userId = req.user.id;
  try {
    const orders = await Order.find({ user: userId }).sort({ createdAt: -1 });
    res.status(200).json({ orders });
  } catch {
    res.status(400).json({ message: "error" });
  }
});
