// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

Product.belongsTo(Category, {
  //
  foreignKey: "category_id",
});

Category.hasMany(Product, {
  //
  foreignKey: "category_id",
});

Product.belongsToMany(Tag, {
  through: "product_tag",
  as: "tagged_product",
  foreignKey: "product_id",
});

Tag.belongsToMany(Product, {
  //
  through: "product_tag",
  as: "tagged_product",
  foreignKey: "tag_id",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

// User.hasMany(Post, {
//   foreignKey: "user_id",
// });

// Post.belongsTo(User, {
//   foreignKey: "user_id",
// });

// User.belongsToMany(Post, {
//   through: Vote,
//   as: "voted_posts",
//   foreignKey: "user_id",
// });

// Post.belongsToMany(User, {
//   through: Vote,
//   as: "voted_posts",
//   foreignKey: "post_id",
// });
