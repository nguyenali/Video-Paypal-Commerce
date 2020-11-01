
const Product = require('./Product');


Product.belongsTo(Category, {
  foreign_key: 'category_id'
})


Category.hasMany(Product, {
  foreign_key: 'category_id'
})


Product.belongsToMany(Tag, {
  through: ProductTag,
  foreign_key: 'product_id'
})

Tag.belongsToMany(Product, {
  through: ProductTag,
  foreign_key: 'tag_id'
})

module.exports = {
  Product
};