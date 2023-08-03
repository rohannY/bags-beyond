const router = require("express").Router();

const { getProducts } = require("../controllers/product.controller");

router.get("/:category", getProducts);

module.exports = router;
