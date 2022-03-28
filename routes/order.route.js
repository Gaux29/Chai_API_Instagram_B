const { createOrder, deleteAllOrders, getAllOrders } = require('../controllers/order.controller');
const router = require('express').Router();

router.post('/', createOrder);

router.get('/', getAllOrders);

router.delete('/', deleteAllOrders);

module.exports = router;