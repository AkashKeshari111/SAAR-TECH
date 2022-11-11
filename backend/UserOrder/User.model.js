const mongoose = require('mongoose');

const userOrderSchema = new mongoose.Schema({
    order_image:{type:String,required:true},
    order_name:{type:String,required:true},
    order_title:{type:String,required:true},
    order_brand:{type:String,required:true},
    order_price:{type:Number,require:true},
    order_qty:{type:Number,required:true},
    userId:{type:String}
})

const UserOrderModel = mongoose.model("UserOrder",userOrderSchema)

module.exports = {UserOrderModel}