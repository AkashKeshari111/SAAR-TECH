const {Schema,model}=require("mongoose");

//authSchema is in camel case formate
const authSchema=new Schema({
    //Add your schema data here 
 
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    country_code:{type:String, default:"+91"},
    mobile:{type:Number},
    gender:{type:String,enum:["Male","Female","Other"]},
    ip_address:{type:String},
    role:{type:String,enum:["Customer"]},
    userId:{type:String}

},{
    timestamps:true
});


// UserModel in Pascal case formate
const AuthModel=model("auth",authSchema);



module.exports={AuthModel}