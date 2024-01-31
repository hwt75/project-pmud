const ProductModel = require('../model/productModel')
class ProductController {
    product(req, res, next) {
      res.render("./productView/product")
    }

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
        var productId = req.params.productId;
        await ProductModel.getById(productId)
          .then((data) => {
            // res.json(data);
            res.render("./productView/product", { productId });
          })
          .catch((err) => {
            res.render('errorPage')
          });
    }

    async getByName(req, res, next) {
      var productName = req.params.productName;
      await ProductModel.getByName(productName)
        .then((data) => {
          res.json(data);
        })
        .catch((err) => {
          console.log(err);
          return res.status(400).json("failed to get product data");
        });
    }

    async deleteById(req, res, next) {
      var productId = req.params.productId;
      // var name = upperCase(id)
      if (productId) {
        await ProductModel.getById(productId)
          .then(async (data) => {
            await ProductModel.deleteById(productId)
              .then((data) => {
                res.json(data);
              })
              .catch((err) => {
                res.status(400).json("delete failed");
              });
          })
          .catch((err) => {
            console.log(err);
            return res.status(400).json("failed to get product data");
          });
      }
    }

    async deleteByName(req, res, next) {
      var productName = req.params.productName;
      if (productName) {
        await ProductModel.getByName(productName)
          .then(async (data) => {
            await ProductModelModel.deleteByName(productName)
              .then((data) => {
                res.json(data);
              })
              .catch((err) => {
                res.status(400).json("delete failed");
              });
          })
          .catch((err) => {
            console.log(err);
            return res.status(400).json("failed to get product data");
          });
      }
    }

    async updateProduct(req, res, next) {
      const productId = req.params.productId;
      const product = req.body;
    
      if (productId) {
        ProductModel.getById(productId)
          .then(existingProduct => {
            if (existingProduct) {
              return ProductModel.updateProduct(productId, product);
            } else {
              return res.status(404).json({ message: "Product not found" });
            }
          })
          .then(() => res.json(product)) // Trả về sản phẩm đã cập nhật
          .catch(err => {
            console.error(err);
            res.status(500).json({ message: "Internal server error" });
          });
      } else {
        res.status(400).json({ message: "Product ID is required" });
      }
    }
    
    showProduct(req, res, next) {
      const productId = req.params.productId;
      if(productId){ 
        
        res.render("./productView/product", { productId });
      }
      else{
        res.render('errorPage')
      }
    }
}

module.exports = new ProductController();