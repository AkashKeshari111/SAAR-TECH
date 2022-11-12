const {Schema,model}=require("mongoose");  

const addressSchema=new Schema({
    first_name:{type:String},
    last_name:{type:String},
    address:{type:String},
    pincode:{type:Number},
    country:{type:String},
    state:{type:String},
    city:{type:String},
    country_code:{type:String, default:"+91"},
    mobile:{type:Number},
    email:{type:String},
    userId:{type:String}
})

const AddressModel=model("address",addressSchema);

module.exports={AddressModel};