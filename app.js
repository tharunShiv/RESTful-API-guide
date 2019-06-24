const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const productRoutes = require("./api/routes/products");
const orderRoutes = require("./api/routes/orders");

mongoose
  .connect(
    "mongodb+srv://tharun:" +
      process.env.MONGO_ATLAS_PW +
      "@cluster0-i3r8p.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(res => console.log("res: " + res))
  .catch(err => console.log("err: " + err));

console.log(
  "mongodb+srv://tharun:" +
    process.env.MONGO_ATLAS_PW +
    "@cluster0-i3r8p.mongodb.net/test?retryWrites=true&w=majority"
);
mongoose.Promise = global.Promise;

// to log the incoming requests
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// appending the headers before we send any response
app.use((req, res, next) => {
  // the second paramter contains the urls to be allowed
  res.header("Access-Control-Allow-Origin", "*");
  // kind of headers to accept
  // also can use * for second parameter here
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  // OPTIONS when the client wants to know the available
  // methods
  if (req.method == "OPTIONS") {
    // add an additional headers
    // mention the methods we're supporting
    res.header("Acces-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

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
