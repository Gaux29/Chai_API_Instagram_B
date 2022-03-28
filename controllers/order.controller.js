const Order = require('../models/order.model');

async function createOrder(req, res) {
    try {
        const order = new Order(req.body);
        const savedOrder = await order.save();
        res.status(200).json({
            message: "order saved successfully",
            savedOrder
        });
    } catch (err) {
        console.log(err);
        res.staus(500).json(err);
    }
}

async function deleteAllOrders(req, res) {
    try {
        await Order.deleteMany({});
        res.status(200).json({message: "All orders deleted successfully"});
    } catch (err) {
        console.log(err);
        res.staus(500).json(err);
    }
}

async function getAllOrders(req, res) {
    try {
        const result = await Order.find({});
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        res.staus(500).json(err);
    }
}

module.exports = {createOrder, deleteAllOrders, getAllOrders};

