const { verifyEmail } = require('../middleware/auth')
const Vendor = require('../models/vendor.model')

module.exports.createVendor = async (req, res) => {
    console.log(req.body)
    //TODO: modify the api to store images in a directory
    try {
        let vendor_id = await Vendor.countDocuments({})
        vendor_id = 'VEND'.concat(vendor_id.toString().padStart(4, "0"))
        console.log(vendor_id)
        const vendor = new Vendor({ ...req.body, vendor_id: vendor_id })
        await vendor.save()
        console.log('vendor created')
        res.status(200).send(vendor)
    } catch (err) {
        res.status(500).send(err)
    }
}
// Create Vendor

module.exports.getVendor = async (req, res) => {
    try {
        const data = await Vendor.find()
        res.status(201).send(data)
    } catch (err) {
        res.status(500).send(err)
    }

}
// Get All Products

module.exports.getVendorById = async (req, res) => {
    try {
        const vendor = await Vendor.findById(req.params.vendor_id)
        res.status(200).send(vendor)
    } catch (err) {
        res.status(500).send(err)
    }
}
// Get Vendor by ID

module.exports.updateVendorById = async (req, res) => {
    try {
        const vendor = await Vendor.findByIdAndUpdate(req.params.vendor_id, req.body, { new: true })
        res.status(200).send(vendor)
    } catch (err) {
        res.status(500).send(err)
    }
}
// Update Vendor by ID


module.exports.deleteVendorById = async (req, res) => {
    try {
        const vendor = await Vendor.findByIdAndDelete(req.params.vendor_id)
        res.status(200).send(vendor)
    } catch (err) {
        res.status(500).send(err)
    }
}
// Delete Vendor by ID

module.exports.deleteManyVendors = async (req, res) => {
    try {
        const vendor = await Vendor.deleteMany()
        res.status(200).send(vendor)
    } catch (err) {
        res.status(500).send(err)
    }
}
// Delete Many Products

module.exports.loginVendor = async (req, res) => {
    // email verification
    // mobile verification
    // captcha verification
    //send jwt
    try {
        const emailVerified = await verifyEmail(req.body.email)
        if (!emailVerified) {
            return res.status(401).send({ message: 'Email not verified' })
        }
        const vendor = await Vendor.findOne({ email: req.body.email })
        if (!vendor) {
            return res.status(401).send({ message: 'User not found with this email' })
        }
        const isPasswordMatch = await bcrypt.compare(req.body.password, vendor.password)
        if (!isPasswordMatch) {
            return res.status(401).send({ message: 'Invalid password' })
        }
        res.send(vendor).status(200)
    } catch (err) {
        res.status(500).send(err)
    }
}


