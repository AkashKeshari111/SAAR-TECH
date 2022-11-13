const {Schema,model}=require("mongoose");

//authSchema is in camel case formate
const adminAuthSchema=new Schema({
    //Add your schema data here  
    
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    country_code:{type:String, default:"+91",required:true},
    mobile:{type:Number,required:true},
    gender:{type:String,enum:["Male","Female","Other"],required:true},
    ip_address:{type:String},
    role:{type:String,enum:["Admin"]},
    userId:{type:String},
    AdminId:{type:String,required:true,unique:true},
    gst_number:{type:String,required:true},
    company_name:{type:String,required:true},

},{
    timestamps:true
});


// UserModel in Pascal case formate
const AdminAuthModel=model("adminauth",adminAuthSchema);



module.exports={AdminAuthModel}