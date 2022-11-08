const {Schema,model}=require("mongoose");

//authSchema is in camel case formate
const authSchema=new Schema({
    //Add your schema data here 
    //Structure you follow -> key value
    // abc:{type:String,min:3,enum:["a","b","c"]}




});


// UserModel in Pascal case formate
const AuthModel=model("auth",authSchema);



module.exports={AuthModel}