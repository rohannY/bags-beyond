const router = require("express").Router();
const {protect} = require("../middleware/authHandler");

const {
    postOrder,getOrders
  } = require('../controllers/order.controller');

  router.post('/placeOrder',protect,postOrder);
  router.get('/history',protect,getOrders);

  module.exports= router;
