const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const productRoutes = require("./routes/productsRoutes");
const vendorRoutes = require("./routes/vendorRoutes");

const reviewRoutes = require("./routes/reviewRoutes");
// const uploads = require('./uploads')
const app = express();
require("dotenv").config();

const { MONGODB_URL, PORT } = process.env;

const port = PORT || 4000;

mongoose
  .connect(MONGODB_URL)
  .then((result) => console.log("Database is connected"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
app.use(cors());
app.use(express.json());
app.use("/api/products", productRoutes);
app.use("/api/vendors", vendorRoutes);
app.use("/api/review", reviewRoutes);

// app.use('/uploads', uploads)
