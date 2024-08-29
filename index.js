const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const path = require('path')
const productRoutes = require('./routes/productsRoutes')
const vendorRoutes = require('./routes/vendorRoutes')
// const uploads = require('./uploads')
const app = express()
require('dotenv').config()

const { MONGODB_URL, PORT } = process.env

const port = PORT || 4000

mongoose.connect(MONGODB_URL)
    .then((result) => console.log("Database is connected"))
    .catch((err) => console.log(err))

app.listen(port, () => {
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
// app.use('/uploads', uploads)
