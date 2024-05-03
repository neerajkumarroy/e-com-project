const express = require("express");
const router = express.Router();
const {AddNewProduct,getAllProducts,deleteProduct,getproduct} = require("../Controllers/product");

router.route("/addproduct").post(AddNewProduct);
router.route("/products").get(getAllProducts);
router.route("/deleterecord/:id").delete(deleteProduct);
router.route("/product/:id").get(getproduct);

module.exports = router;