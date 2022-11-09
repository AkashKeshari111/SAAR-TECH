const {Schema,model}=require("mongoose");


const adminProductSchema=new Schema({
    product_img:{type:String,required:true},
    product_name:{type:String,required:true},
    product_category:{
        
           watch:{type:String},
           TV:{type:String},
    
    },
    product_title:{type:String,required:true},
    product_brand:{type:String,required:true},
    product_year:{type:String,required:true}, 
    product_price:{type:Number,require:true},
    product_rating:{type:Number,required:true},
    product_discount:{type:Number,required:true},
    product_width:{type:Number},
    product_width_unit:{type:String},
    product_height:{type:Number},
    product_height_unit:{type:String},
    product_qty:{type:Number,required:true},
    product_description:{type:String,required:true},
    userId:{type:String}
})
const AdminProductModel=model("adminproduct",adminProductSchema);

module.exports={AdminProductModel}