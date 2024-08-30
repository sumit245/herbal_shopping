<<<<<<< HEAD
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const path = require('path')
const productRoutes = require('./routes/productsRoutes')
const vendorRoutes = require('./routes/vendorRoutes')
// const uploads = require('./uploads')
const app = express()
require('dotenv').config()
=======
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const productRoutes = require("./routes/productsRoutes");
const addressRoutes = require("./routes/addressRoutes");
const blogsRoutes = require("./routes/blogsRoutes");
const adduserRoutes = require("./routes/userRoutes");
const customersRoutes = require("./routes/customersRoutes");
const vendorsRoutes = require("./routes/vendorsRoutes");
const ordersRoutes = require( "./routes/ordersRoutes" );
const dashboardRoutes = require( "./routes/dashboardRoutes" );
const refundRoutes = require( "./routes/refundRoutes" );
>>>>>>> aa053adb525c8fafa076f3608b83e3e1881ceaef

const app = express();
require("dotenv").config();

const { MONGODB_URL, PORT } = process.env;
console.log(MONGODB_URL);
const port = PORT || 4000;

mongoose
  .connect(MONGODB_URL)
  .then((result) => console.log("Database is connected"))
  .catch((err) => console.log(err));

app.listen(port, () => {
<<<<<<< HEAD
    console.log(`Server is running on port ${port}`)
})
app.use(cors())
app.use(express.static('uploads'))

app.use(express.static(path.join(__dirname, "./dist/")));

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "./dist/"));
    res.setHeader('Access-Control-Allow-Origin', "*")
    res.setHeader('Access-Control-Allow-Headers', "application/json")
});



app.use('/uploads', express.static('uploads'))
app.use(express.json())
app.use('/api/products', productRoutes)
app.use('/api/vendors', vendorRoutes)
=======
  console.log(`Server is running on port ${port}`);
});
app.use(cors());
app.use(express.json());
app.use("/api/products", productRoutes);
app.use("/api/address", addressRoutes);
app.use("/api/blogs", blogsRoutes);
app.use("/api/user", adduserRoutes);
app.use("/api/customers", customersRoutes);
app.use("/api/vendors", vendorsRoutes);
app.use( "/api/orders", ordersRoutes );
app.use( "/api/dashboard", dashboardRoutes );
app.use( "/api/refund", refundRoutes );
>>>>>>> aa053adb525c8fafa076f3608b83e3e1881ceaef
// app.use('/uploads', uploads)



