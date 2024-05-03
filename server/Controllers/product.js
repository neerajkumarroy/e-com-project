const ProductModel = require("../Models/product");

const AddNewProduct = async (req, res) => {
    const payload = req.body;
    const data = new ProductModel(payload);
    const result = await data.save();
    res.send(result);
}

const getAllProducts = async (req, res) => {
    const data = await ProductModel.find();
    if (data.length > 0) {
        res.send(data)
    } else {
        res.send({ result: "Products Not Fund" })
    }
}
const deleteProduct = async (req, res) => {
    const id = { _id: req.params.id };
    const data = await ProductModel.deleteOne(id);
    res.send(data);

}

const getproduct = async (req, res) => {
    const id = { _id: req.params.id };
    const data = await ProductModel.findOne(id);
    res.send(data);
}

module.exports = { AddNewProduct, getAllProducts, deleteProduct, getproduct };