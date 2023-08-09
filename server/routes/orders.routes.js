const router = require("express").Router();
const {protect} = require("../middleware/authHandler");

const {
    postOrder
  } = require('../controllers/order.controller');

  router.post('/placeOrder',protect,postOrder);

  module.exports= router;
