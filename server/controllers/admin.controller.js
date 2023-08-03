const asyncHandler = require("../middleware/asyncHandler");
const Product = require("../models/product.model");

const { buildSuccessMsg, uploadToCloudinary } = require("../utils/upload");

const multer = require('multer');
const upload = multer().none();

// @desc    Post product
// @route   POST /admin/addproduct
// @access  Private/Admin
exports.postProduct = asyncHandler(async (req, res, next) => {
  if (req.user.isAdmin === false) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  const { name, price, category, description } = req.body;
  const imageUrlList = [];
  for (let i = 0; i < req.files.length; i++) {
    const locaFilePath = req.files[i].path;
    const result = await uploadToCloudinary(locaFilePath);
    imageUrlList.push(result.url);
  }
  const image = buildSuccessMsg(imageUrlList);
  const product = await Product.create({ name, price, category, description, image });
  if (product) {
    return res.status(200).json({ message: "Product Added" });
  }
  res.status(500).json({ message: 'Failed to add product' });
});


// @desc    Delete product
// @route   Delete /admin/deleteproduct
// @access  Private/Admin
exports.deleteProduct = asyncHandler(async (req, res, next) => {
  if (req.user.isAdmin === false) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (deletedProduct) {
      return res.status(200).json({ message: 'Product deleted successfully' });
    }
    return res.status(404).json({ message: 'Product not found' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// @desc    Update Prouct
// @route   PUT /admin/updateproduct
// @access  Private 
exports.updateProduct = asyncHandler(async (req, res, next) => {
  if (req.user.isAdmin === false) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ message: 'Invalid form-data' });
    }
    try {
      const updatedProduct = await Product.findByIdAndUpdate(req.body.id, req.body, { new: true });
      if (updatedProduct) {
        return res.status(200).json({ message: 'Product updated successfully' });
      }
      return res.status(404).json({ message: 'Product not found' });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  });
});

