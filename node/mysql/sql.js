module.exports = {
  productList: `SELECT * FROM product`,
  productDetail: `SELECT * FROM product WHERE id=?`,
  productInsert: `INSERT INTO product SET ?`,
  productUpdate: `Update product SET ? WHERE id=?`,
  productDelete: `DELETE FROM product WHERE id=?`,
};
