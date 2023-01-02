const { Schema, model } = require("mongoose");

const adminProductSchema = new Schema(
  {
    product_img: { type: String},
    product_name: { type: String },
    product_category: {
      type: String,
      required: true,
    },
    product_title: { type: String},
    product_brand: { type: String},
    product_year: { type: String },
    product_price: { type: Number},
    product_rating: { type: Number},
    product_discount: { type: Number },
    product_width: { type: Number },
    product_width_unit: { type: String },
    product_height: { type: Number },
    product_height_unit: { type: String },
    product_qty: { type: Number},
    product_description: { type: String},
    userId: { type: String },
  },
  {
    timestamps: true,
  }
);
const AdminProductModel = model("adminproduct", adminProductSchema);

module.exports = { AdminProductModel };
