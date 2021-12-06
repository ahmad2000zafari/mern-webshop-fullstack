const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRouter = require("./routes/auth.js");
const productRouter = require("./routes/product.js");
const orderRouter = require("./routes/order.js");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");

const path = require("path");

const app = express();
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB connection succeed!");
  })
  .catch((err) => {
    console.log(err);
  });

//START
app.listen(process.env.PORT || 5000, () => {
  console.log("backend is running!");
});

//ROUTER ROOTS
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);
app.use("/api/checkout", stripeRoute);
