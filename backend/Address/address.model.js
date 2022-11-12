const {Schema,model}=require("mongoose");

const addressSchema=new Schema({
    first_name:{type:String, required:true},
    last_name:{type:String},
    address:{type:String,required:true},
    pincode:{type:Number,required:true},
    country:{type:String,required:true},
    state:{type:String,required:true},
    city:{type:String,required:true},
    country_code:{type:String, default:"+91",required:true},
    mobile:{type:Number,required:true},
    email:{type:String,required:true},
    userId:{type:String}
})

const AddressModel=model("address",addressSchema);

module.exports={AddressMode};