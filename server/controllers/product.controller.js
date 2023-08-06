const asyncHandler = require("../middleware/asyncHandler");
const Product = require("../models/product.model");

// @desc    Get product
// @route   GET /products/:category
// @access  Public
exports.getProducts = asyncHandler(async (req, res, next) => {
  const category = req.params.category;
  let query = {};
  if (category !== "all") {
    query = { category: category };
  }

  Product.find(query)
    .then((products) => {
      res.status(200).json(products);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

exports.getSingleProduct = asyncHandler(async(req,res,next)=>{
   

});
