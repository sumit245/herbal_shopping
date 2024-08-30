const Product = require("../models/products.model");

module.exports.createProduct = async (req, res) => {
    console.log(req.body)
    //TODO: modify the api to store images in a directory
    try {
        const product = new Product(req.body)
        await product.save()
        res.status(201).send(product)
    } catch (err) {
        res.status(500).send(err)
    }
}
// Create Product

module.exports.uploadImage = async (req, res) => {
  try {
    const { id } = req.params;
    if (!req.file) {
      return res.status(400).send({ message: "No image file provided" });
    }

    const product = await Product.findByIdAndUpdate(
      id,
      {
        $set: { image_url: `${req.file.path}` },
      },
      { new: true }
    );

    if (!product) {
      return res.status(404).send({ message: "Product not found" });
    }

    res.status(200).send({ message: "Image uploaded", product });
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports.getProduct = async (req, res) => {
  try {
    console.log("running");
    const data = await Product.find();
    if (data.length < 1) {
      return res
        .status(404)
        .send({ message: "Product Not found!!!", count: 0 });
    }
    res
      .status(200)
      .send({
        message: "Product Fetched  successfully",
        data: data,
        count: data.length,
      });
  } catch (err) {
    res.status(500).send(err);
  }
};


module.exports.getProductByID = async (req, res) => {
  try {
    const product = await Product.findById(req.params.product_id);
    res.status(200).send(product);
  } catch (err) {
    res.status(500).send(err);
  }
};
// Get Product by ID

module.exports.updateProductById = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.product_id,
      req.body,
      { new: true }
    );
    res.status(200).send(product);
  } catch (err) {
    res.status(500).send(err);
  }
};
// Update Product by ID

module.exports.deleteProductById = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.product_id);
    res.status(200).send(product);
  } catch (err) {
    res.status(500).send(err);
  }
};
// Delete Product by ID

module.exports.deleteManyProducts = async (req, res) => {
  try {
    const product = await Product.deleteMany();
    res.status(200).send(product);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports.dashboard = async (req, res) => {
  try {
    const products = await products.find().products();
    res.status(200).send({ useRoutes });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
