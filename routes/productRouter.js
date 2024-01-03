const express = require('express');

const productController = require('../controllers/productController');

const router = express.Router();

router.get('/product', productController.getAllData)

router.get('/get', productController.getById)

router.put('/edit/:productId', productController.updateProduct)

module.exports = router;

    // async updateProduct(req, res, next) {
    //     try {
    //       const productId = req.params.productId;
    //       const product = req.body;
      
    //       if (productId) {
    //         // Kiểm tra xem sản phẩm có tồn tại không
    //         const existingProduct = await ProductModel.getById(productId);
      
    //         // Cập nhật sản phẩm nếu nó tồn tại
    //         if (existingProduct) {
    //           await ProductModel.updateProduct(productId, product);
    //           res.json(product); // Trả về sản phẩm đã cập nhật
    //         } else {
    //           res.status(404).json({ message: "Product not found" });
    //         }
    //       } else {
    //         res.status(400).json({ message: "Product ID is required" });
    //       }
    //     } catch (err) {
    //       console.error(err);
    //       res.status(500).json({ message: "Internal server error" });
    //     }
    //   }

    // async updateProduct(req, res, next) {
    //     const productId = req.params.productId;
    //     const product = req.body;
      
    //     if (productId) {
    //       ProductModel.getById(productId)
    //         .then(existingProduct => {
    //           if (existingProduct) {
    //             return ProductModel.updateProduct(productId, product);
    //           } else {
    //             return res.status(404).json({ message: "Product not found" });
    //           }
    //         })
    //         .then(() => res.json(product)) // Trả về sản phẩm đã cập nhật
    //         .catch(err => {
    //           console.error(err);
    //           res.status(500).json({ message: "Internal server error" });
    //         });
    //     } else {
    //       res.status(400).json({ message: "Product ID is required" });
    //     }
    //   }