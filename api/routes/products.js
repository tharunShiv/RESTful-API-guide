const express = require("express");
const router = express.Router();

// any query reaching here will only reach
// if the route is /products
// so / here is equivalent to /products

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling Get requests"
  });
});

router.post("/", (req, res, next) => {
  const product = {
    name: req.body.name,
    price: req.body.price
  };
  res.status(201).json({
    message: "Handling POST requests to /products",
    createdProduct: product
  });
});

router.get("/:productId", (req, res, next) => {
  const id = req.params.productId;
  console.log(id);
  if (id == "special") {
    res.status(200).json({
      message: "You discovered the special ID",
      id
    });
  } else {
    res.status(200).json({
      message: "You Passed an ID"
    });
  }
});

router.patch("/:productId", (req, res, next) => {
  const id = req.params.productId;
  res.status(200).json({
    message: "Updated product!",
    id
  });
});

router.delete("/:productId", (req, res, next) => {
  const id = req.params.productId;
  res.status(200).json({
    message: "Product Deleted",
    id
  });
});

module.exports = router;
