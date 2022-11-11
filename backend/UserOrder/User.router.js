const {Router} = require('express');
const { authentication } = require('../Middleware/authentication');
const { UserOrderModel } = require('./User.model');


const userOrder = Router();

userOrder.post("/orderplaced",authentication,async(req,res) => {
    const {order_image,order_name,order_title,order_brand,order_qty,order_price,userId} = req.body;
    try {
        const data = await UserOrderModel({order_image,order_name,order_title,order_brand,order_qty,order_price,userId})
        await data.save();
        res.status(201).send({"msg":"updated"})

    } catch (error) {
        res.status(500).send(error);
    }
})

userOrder.get("/orderplaced",authentication,async(req,res) => {
    const {userId} = req.body;
    try {
        const allData = await UserOrderModel.find({userId})
        res.status(201).send(allData)
    } catch (error) {
        res.status(500).send(error)
    }
    
})

module.exports = userOrder