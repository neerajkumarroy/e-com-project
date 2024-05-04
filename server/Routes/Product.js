const express = require("express");
const router = express.Router();
const { AddNewProduct, getAllProducts, deleteProduct, getproduct, UpdateProduct, SearchProduct } = require("../Controllers/product");

router.route("/addproduct").post(AddNewProduct);
router.route("/products").get(getAllProducts);
router.route("/deleterecord/:id").delete(deleteProduct);
router.route("/product/:id").get(getproduct);
router.route("/updateproduct/:id").put(UpdateProduct);
router.route("/search/:key").get(SearchProduct);

module.exports = router;