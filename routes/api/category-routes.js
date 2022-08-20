const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
  // find all categories
  Category.findAll({
    include: [
      {
        // be sure to include its associated Products
        model: Product,
        attributes: ["id", "product_name", "price", "stock"],
      },
    ],
  })
    .then((dbCatagoryData) => res.json(dbCatagoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router
  .get("/:id", (req, res) => {
    // find one category by its `id` value
    Category.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: Product,
          attributes: ["id", "product_name", "price", "stock", "category_id"],
          where: {
            category_id: req.params.id,
          },
        },
      ],
    });
    // be sure to include its associated Products
  })
  .then((dbCatagoryData) => {
    if (!dbCatagoryData) {
      res.status(404).json({ message: "No cat found with this id" });
      return;
    }
    res.json(dbCatagoryData);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });

router
  .post("/", (req, res) => {
    // create a new category
    Category.create({
      category_name: req.body.category_name,
    });
  })
  .then((dbCatagoryData) => res.json(dbCatagoryData))
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });

router
  .put("/:id", (req, res) => {
    // update a category by its `id` value
    Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
  })
  .then((dbCatagoryData) => {
    if (!dbCatagoryData) {
      res.status(404).json({ message: "no cat found with that id!" });
    } else res.json(dbCatagoryData);
    return;
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });

// delete a category by its `id` value
router.delete("/:id", (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbCatagoryData) => {
      if (!dbCatagoryData) {
        res.status(404).json({ message: "No cat found with this id" });
        return;
      }
      res.json(dbCatagoryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
