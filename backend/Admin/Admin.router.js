const { Router } = require("express");
const { authentication } = require("../Middleware/authentication");
const authorization = require("../Middleware/authorization");
const { AdminProductModel } = require("./Admin.model");

const AdminProductRouter = Router();

AdminProductRouter.get("/allproducts",async(req,res)=>{
  let {
    page = 1,
    limit = 10,
    sortBy = "id",
    order = "asc",
  
  } = req.query;
  try {
      
    product = await AdminProductModel.find({})
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ [sortBy]: order === "asc" ? 1 : -1 });
  
  const count = await AdminProductModel.find({}).count();
  // console.log(count)
  res
    .status(200)
    .send({ data: product, totalPages: Math.ceil(count / limit) });
} catch (err) {
  res.status(500).send(err);
}

})




AdminProductRouter.get(
  "/product",
  authentication,
  authorization(["Admin"]),
  async (req, res) => {
    const { userId } = req.body;
    let {
      page = 1,
      limit = 10,
      sortBy = "id",
      order = "asc",
    
    } = req.query;
    try {
      
        product = await AdminProductModel.find({ userId ,sortBy})
          .skip((page - 1) * limit)
          .limit(limit)
          .sort({ [sortBy]: order === "asc" ? 1 : -1 });
      
      const count = await AdminProductModel.find({userId}).count();
      // console.log(count)
      res
        .status(200)
        .send({ data: product, totalPages: Math.ceil(count / limit) });
    } catch (err) {
      res.status(500).send(err);
    }
  }
);

AdminProductRouter.post(
  "/product",
  authentication,
  authorization(["Admin"]),
  async (req, res) => {
    const {
      product_img,
      product_name,
      product_category,
      product_title,
      product_brand,
      product_year,
      product_price,
      product_rating,
      product_discount,
      product_width,
      product_width_unit,
      product_height,
      product_height_unit,
      product_qty,
      product_description,
    } = req.body;

    const userId = req.body.userId;
    try {
      const post = new AdminProductModel({
        product_img,
        product_name,
        product_category,
        product_title,
        product_brand,
        product_year,
        product_price,
        product_rating,
        product_discount,
        product_width,
        product_width_unit,
        product_height,
        product_height_unit,
        product_qty,
        product_description,
        userId,
      });
      await post.save();
      res.status(201).send({ msg: "Product added successfully" });
    } catch (err) {
      res.send(err);
    }
  }
);

AdminProductRouter.patch(
  "/product/:id",
  authentication,
  authorization(["Admin"]),
  async (req, res) => {
    const { id } = req.params;
    try {
      const updateProduct = await AdminProductModel.updateOne(
        { _id: id },
        { $set: req.body }
      );
      res.status(201).send({ msg: "Updated Product", updateProduct });
    } catch (err) {
      res.status(500).send(err);
    }
  }
);

AdminProductRouter.delete(
  "/product/:id",
  authentication,
  authorization(["Admin"]),
  async (req, res) => {
    const { id } = req.params;
    try {
      const deletingProduct = await AdminProductModel.deleteOne({ _id: id });
      res.status(201).send({ msg: "Deleted Product ", deletingProduct });
    } catch (err) {
      res.status(500).send(err);
    }
  }
);



AdminProductRouter.delete("/products/:userId",authentication,async(req,res)=>{
    const {userId}=req.params;
    const allDeleteProducts=await AdminProductModel.remove({userId});
    res.status(201).send(allDeleteProducts)
})

module.exports = AdminProductRouter;
