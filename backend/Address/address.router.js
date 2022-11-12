const { Router } = require("express");
const { authentication } = require("../Middleware/authentication");
const { AddressModel } = require("./address.model");

const addressRouter = Router();



addressRouter.get("/address",authentication,async(req,res)=>{
    const {userId}=req.body;
         const user=await AddressModel.find({userId});
         res.send(user)
})

addressRouter.post("/address", authentication, async (req, res) => {
  const {
    userId,
    first_name,
    last_name,
    address,
    pincode,
    country,
    state,
    city,
    country_code,
    mobile,
    email,
  } = req.body;
  console.log(userId);
  const user = await AddressModel.findOne({ userId });
  try {
    if (user) {
      res.status(403).send("This address are already exists");
    } else {
      const new_address = await AddressModel({
        first_name,
        last_name,
        address,
        pincode,
        country,
        state,
        city,
        country_code,
        mobile,
        email,
        userId,
      });

      await new_address.save();
      res.status(201).send({"msg":"Address added successfully"});
    }
  } catch (err) {
    res.status(500).send(err);
  }
});


addressRouter.patch("/address/:userId",authentication,async(req,res)=>{
    // const {userId}=req.body;
    const {userId}=req.params;
    const {
        first_name,
        last_name,
        address,
        pincode,
        country,
        state,
        city,
        country_code,
        mobile,
        email,
    }=req.body;
    try{
    const user=await AddressModel.updateOne({userId},{$set:{
        first_name,
        last_name,
        address,
        pincode,
        country,
        state,
        city,
        country_code,
        mobile,
        email,
    }})
    res.status(201).send(user);
}
catch(err){
    res.status(500).send(err)
}
})



module.exports = addressRouter;
