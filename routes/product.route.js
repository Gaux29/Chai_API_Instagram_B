const router = require('express').Router();
const {addProduct, getAllproducts, reviewProduct} = require('../controllers/product.controller');

router.post('/', addProduct);

router.get('/', getAllproducts);

router.patch('/:productId/review', reviewProduct);

module.exports = router;