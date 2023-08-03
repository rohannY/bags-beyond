const router = require("express").Router();

const {
  postProduct, deleteProduct, updateProduct,
} = require("../controllers/admin.controller");

const {upload} = require("../utils/upload");
const {protect} = require("../middleware/authHandler");

router.post('/addproduct',upload.array('files', 12),protect,postProduct);
router.delete('/deleteproduct/:id',protect,deleteProduct);
router.put('/updateproduct',protect,updateProduct);

module.exports= router;
