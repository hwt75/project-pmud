const express = require('express');

const productController = require('../controllers/productController');

const router = express.Router();

router.get('/productView', productController.product)

router.get('/product', productController.getAllData)
router.get('/productDetail/:productId', productController.productDetails)

router.get('/getProductById/:productId', productController.getById)
router.get('/getProductByName/:productName', productController.getByName)

router.delete('/deleteProductById/:id', productController.deleteById)
router.delete('/deleteProductByName/:productName', productController.deleteByName)

router.put('/edit/:productId', productController.updateProduct)

module.exports = router;