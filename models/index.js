// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

Product.belongsTo(Category, {
  //
  foreignKey: "catagory_id",
});

Category.hasMany(Product, {
  //
  foregnKey: "catagory_id",
});

Product.belongsToMany(Tag, {
  //
  through: ProductTag,
  as: "tagged_product",
  foreignKey: "product_id",
});

Tag.belongsToMany(Product, {
  //
  through: ProductTag,
  as: "tagged_product",
  foregnKey: "product_id",
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
