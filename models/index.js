// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

Product.belongsTo(Category, {
  foreignKey: "catagory_id",
});

Category.hasMany(Product, {
  foregnKey: "catagory_id",
});

Product.belongsToMany(Tag, {
  through: "product_tag",
  as: "tagged_product",
  foreignKey: "product_id",
});

Tag.belongsToMany(Product, {
  through: "product_tag",
  as: "tagged_product",
  foregnKey: "tag_id",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
