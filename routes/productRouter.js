const express = require('express');

const productController = require('../controllers/productController');

const router = express.Router();

router.get('/product', productController.getAllData)

router.get('/get', productController.getById)

router.put('/edit/:productId', productController.updateProduct)

module.exports = router;