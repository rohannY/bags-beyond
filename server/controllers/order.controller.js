const asyncHandler = require("../middleware/asyncHandler");
const Order = require("../models/order.model.js");

exports.postOrder = asyncHandler(async(req,res,next)=>{
    const { userId, orderItems, totalPrice } = req.body;
    try {
        const order = new Order({
          user: userId,
          orderItems: orderItems,
          totalPrice: totalPrice,
        });    
        const createdOrder = await order.save();
        res.status(201).json({
          message: 'Order placed successfully',
          order: createdOrder,
        });
      } catch (error) {
        res.status(500).json({
          error: 'Error placing order',
        });
      }
});