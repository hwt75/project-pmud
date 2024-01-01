const ProductModel = require('../model/productModel');

class ProductController {
    async getAllData(req, res, next) {
        await ProductModel.getAllData()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json(err);
        })
    }

    async getById(req, res, next) {
        var id = req.query.id;
        await ProductModel.getById(id)
          .then((data) => {
            res.json(data);
          })
          .catch((err) => {
            console.log(err);
            return res.status(400).json("failed to get user data");
          });
      }

    // async updateProduct(req, res, next) {
    //     var productId = req.params.productId;
    //     const product = req.body;
    //     if (productId){
    //         await ProductModel.getById(productId)
    //         .then(async () => {
    //             await ProductModel.updateProduct(product)
    //             .then(() => {
    //                 res.json(req.body);
    //             })
    //             .catch((err) => {
    //                 console.log(err);
    //                 return res.status(400).json("put failed");
    //             });
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //             return res.status(400).json("failed to get user data");
    //         });
    //     }
    // }

    async updateProduct(req, res, next) {
        try {
          const productId = req.params.productId;
          const product = req.body;
      
          if (productId) {
            // Kiểm tra xem sản phẩm có tồn tại không
            const existingProduct = await ProductModel.getById(productId);
      
            // Cập nhật sản phẩm nếu nó tồn tại
            if (existingProduct) {
              await ProductModel.updateProduct(productId, product);
              res.json(product); // Trả về sản phẩm đã cập nhật
            } else {
              res.status(404).json({ message: "Product not found" });
            }
          } else {
            res.status(400).json({ message: "Product ID is required" });
          }
        } catch (err) {
          console.error(err);
          res.status(500).json({ message: "Internal server error" });
        }
      }

}

module.exports = new ProductController();