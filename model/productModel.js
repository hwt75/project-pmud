const CommonModel = require('./commonModel')



class ProductModel  extends CommonModel {
    async getAllData () {
       return await this.executeQuery('SELECT * FROM product');
    }
    async getById (productId) {
        return await this.executeQuery(`SELECT * FROM product WHERE productId = '${productId}'`);
    }
    async getByName (productName) {
        return await this.executeQuery(`SELECT * FROM product WHERE productName = '${productName}'`);
    }
    async deleteById (productId) {
        return await this.executeQuery(`DELETE FROM product WHERE id = '${productId}'`);
    }
    async deleteByName (productName) {
        return await this.executeQuery(`DELETE FROM product WHERE name = '${productName}'`);
    }
    // async updateProduct (productId){
    //     const { productName, productAddress, unit, numberInStorage, company, purchasePrice, sellingPrice, productTypeId } = product
    //     return await this.executeQuery(`UPDATE product SET productName = '${productName}', 
    //                                                         productAddress = '${productAddress}', 
    //                                                         unit = '${unit}', 
    //                                                         numberInStorage = '${numberInStorage}', 
    //                                                         company = '${company}', 
    //                                                         purchasePrice = '${purchasePrice}', 
    //                                                         sellingPrice = '${sellingPrice}', 
    //                                                         productTypeId = '${productTypeId}' 
    //                                     WHERE productId = '${productId}'`);
    // }

    async updateProduct(productId, product) {
        try {
          // Sử dụng truy vấn được tham số hóa
          const query = `UPDATE product SET productName = '${product.productName}', 
                                            productAddress = '${product.productAddress}', 
                                            unit = '${product.unit}', 
                                            numberInStorage = '${product.numberInStorage}', 
                                            company = '${product.company}', 
                                            purchasePrice = '${product.purchasePrice}', 
                                            sellingPrice = '${product.sellingPrice}'
                                           
                        WHERE productId = '${productId}'`
      
          // Thực thi truy vấn
          const result = await this.executeQuery(query, {
            productName: product.productName,
            productAddress: product.productAddress,
            unit: product.unit,
            numberInStorage: product.numberInStorage,
            company: product.company,
            purchasePrice: product.purchasePrice,
            sellingPrice: product.sellingPrice,
            productId: productId,
          });
      
          // Kiểm tra kết quả
          if (result.affectedRows === 0) {
            throw new Error("No rows affected");
          }
      
          return result;
        } catch (err) {
          // Ghi nhật ký lỗi
          console.error(err);
          throw err; // Đẩy lỗi lên để xử lý ở controller
        }
      }
      
}
module.exports = new ProductModel;