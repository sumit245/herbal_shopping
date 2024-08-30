const mongoose = require("mongoose");
const Vendor = require("./vendors.model");

const productSchema = new mongoose.Schema(
  {
    // SKU: {
    //   type: String,
    //   // required: true,
    //   unique: true,
    // },
    name: {
      type: String,
      required: true,
      minLength: 5,
      maxLength: 40,
      lowercase: true,
    },
    description: {
      type: String,
    },
    status: {
      type: Boolean,
      default: true,
    },
    regular_price: {
      type: Number,
      required: true,
    },
    sale_price: {
      type: Number,
    },
    sale_from: {
      type: Date,
    },
    sale_to: {
      type: Date,
    },
    weight: {
      type: Number, // weight in grams or kilograms
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    total_stocks: {
      type: Number,
      required: true,
      min: 0,
    },
    image_url: {
      type: String, // path to image
    },
    product_type: {
      type: String,
      required: true,
    },
    brand_name: {
      type: String,
      required: true,
    },
    categories: {
      name: {
        type: String,
        required: true,
      },
      slug: {
        type: String,
        required: true,
      },
      status: {
        type: String,
        enum: ["active", "inactive"],
        default: "active",
      },
      is_featured: {
        type: Boolean,
        default: false,
      },
      commission_percentage: {
        type: Number,
        required: true,
      },
      image_url: {
        type: String, // path to image
      },
    },
    reviews: [
      {
        product_image: {
          type: String, // path to product image
        },
        comments: {
          type: String,
          required: true,
        },

        rating: {
          type: Number,
          min: 1,
          max: 5,
          required: true,
        },
        status: {
          type: String,
          enum: ["approved", "pending", "rejected"],
          default: "pending",
        },
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
