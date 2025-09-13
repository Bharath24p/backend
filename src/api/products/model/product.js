const mongoose=require('mongoose');

const ProductSchema=mongoose.Schema({
    name:{type:String,required:true,unique:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    categories:{type:Array},    
},{timestamps:true});
module.exports=mongoose.model("Product",ProductSchema);