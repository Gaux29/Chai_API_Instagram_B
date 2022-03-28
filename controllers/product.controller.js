const Product = require('../models/product.model');

async function addProduct(req, res) {
    try {
        const body = req.body;
        const product = Product(body);
        const savedProduct = await product.save();
        res.status(200).json({
            message: "Product added successfully",
            savedProduct
        });
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
}

async function getAllproducts(req, res) {
    try {
        const products = await Product.find({});
        res.status(200).json({
            products
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

async function reviewProduct(req, res) {
    try {
        const review = req.body;
        const productId = req.params.productId;
        const reviewedProduct = await Product.findByIdAndUpdate(productId, {$push: {reviews: review}}, {new: true});
        res.status(200).json({
            message: "Review added successfully",
            reviewedProduct
        });
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
}

module.exports = {addProduct, getAllproducts, reviewProduct};