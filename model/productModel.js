const CommonModel = require("./commonModel");
const { formatterPrice } = require("../utils/processString");

class ProductModel extends CommonModel {

  async getAllData() {
    return await this.executeQuery("SELECT * FROM product");
  }

  // async getAllData() {
  //   const products = await this.executeQuery("SELECT * FROM product");
  //   return products.map((product) => ({
  //     productId: product.productId,
  //     productName: product.productName,
  //     productUnit: product.productUnit,
  //     purchasePrice: product.purchasePrice,
  //     sellingPrice: product.sellingPrice
  //   })); 
  // }
  
  async getById(productId) {
    return await this.executeQuery(
      `SELECT * FROM product WHERE productId = '${productId}'`
    );
  }
  async getByName(productName) {
    return await this.executeQuery(
      `SELECT * FROM product WHERE productName = '${productName}'`
    );
  }
  async deleteById(productId) {
    return await this.executeQuery(
      `DELETE FROM product WHERE id = '${productId}'`
    );
  }
  async deleteByName(productName) {
    return await this.executeQuery(
      `DELETE FROM product WHERE name = '${productName}'`
    );
  }

  updateProduct(productId, product) { 
    // Định dạng lại price 
    const formatterSellingPrice = formatPrice(product.sellingPrice);

    // Sử dụng truy vấn được tham số hóa
    const query = `UPDATE product SET productName = '${product.productName}', 
                                        productAddress = '${product.productAddress}', 
                                        unit = '${product.unit}', 
                                        numberInStorage = '${product.numberInStorage}', 
                                        company = '${product.company}', 
                                        purchasePrice = '${product.purchasePrice}', 
                                        sellingPrice = '${product.sellingPrice}',
                                        soldCount = '${product.soldCount}'
                      WHERE productId = '${productId}'`;

    // Thực thi truy vấn
    return this.executeQuery(query, {
      productName: product.productName,
      productAddress: product.productAddress,
      unit: product.unit,
      numberInStorage: product.numberInStorage,
      company: product.company,
      purchasePrice: product.purchasePrice,
      sellingPrice: product.sellingPrice,
      soldCount: product.soldCount,
      productId: productId,
    })
      .then((result) => {
        // Kiểm tra kết quả
        if (result.affectedRows === 0) {
          throw new Error("No rows affected");
        }

        return result;
      })
      .catch((err) => {
        // Ghi nhật ký lỗi
        console.error(err);
        throw err; // Đẩy lỗi lên để xử lý ở controller
      });
  }
}
module.exports = new ProductModel();
