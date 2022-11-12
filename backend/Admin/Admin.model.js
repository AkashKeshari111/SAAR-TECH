const { Schema, model } = require("mongoose");

const adminProductSchema = new Schema(
  {
    product_img: { type: String, required: true },
    product_name: { type: String, required: true },
    product_category: {
      type: String,
      required: true,
    },
    product_title: { type: String, required: true },
    product_brand: { type: String, required: true },
    product_year: { type: String, required: true },
    product_price: { type: Number, required: true },
    product_rating: { type: Number, required: true },
    product_discount: { type: Number, required: true },
    product_width: { type: Number, required: true },
    product_width_unit: { type: String, required: true },
    product_height: { type: Number, required: true },
    product_height_unit: { type: String, required: true },
    product_qty: { type: Number, required: true },
    product_description: { type: String, required: true },
    userId: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const AdminProductModel = model("adminproduct", adminProductSchema);

module.exports = { AdminProductModel };
