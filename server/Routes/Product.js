const express = require("express");
const router = express.Router();
const veryfitoken = require("../jwt.js");
const { AddNewProduct, getAllProducts, deleteProduct, getproduct, UpdateProduct, SearchProduct } = require("../Controllers/product");

router.route("/addproduct").post(veryfitoken,AddNewProduct);
router.route("/products").get(veryfitoken,getAllProducts);
router.route("/deleterecord/:id").delete(veryfitoken,deleteProduct);
router.route("/product/:id").get(veryfitoken,getproduct);
router.route("/updateproduct/:id").put(veryfitoken,UpdateProduct);
router.route("/search/:key").get(veryfitoken,SearchProduct);

module.exports = router;