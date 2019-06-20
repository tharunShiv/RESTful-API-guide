const express = require("express");
const app = express();
const morgan = require("morgan");

const productRoutes = require("./api/routes/products");
const orderRoutes = require("./api/routes/orders");

// to log the incoming requests
app.use(morgan("dev"));

// app.use((req, res, next) => {
//   res.status(200).json({
//     message: "It works"
//   });
// });

app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

// to handle errors
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    message: "Error 404 " + error + " " + (error.status || 500)
  });
});

module.exports = app;
