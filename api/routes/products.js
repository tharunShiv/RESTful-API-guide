const express = require("express");
const router = express.Router();

const multer = require("multer");
const checkAuth = require("../middleware/check-auth");
const ProductsControllers = require("../controllers/products");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    // null is error
    cb(null, ".");
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  //reject a file
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png")
    cb(null, false);
  else cb(null, true);
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});

const Product = require("../models/product");

// any query reaching here will only reach
// if the route is /products
// so / here is equivalent to /products

router.get("/", ProductsControllers.products_get_all);

// middlewares given by upload
// single means we will get only one file

router.post(
  "/",
  upload.single("productImage"),
  checkAuth,
  ProductsControllers.products_create_product
);

router.get("/:productId", ProductsControllers.products_get_product);

router.patch(
  "/:productId",
  checkAuth,
  ProductsControllers.products_update_product
);

router.delete(
  "/:productId",
  checkAuth,
  ProductsControllers.products_delete_product
);

module.exports = router;
