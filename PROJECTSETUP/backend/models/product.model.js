const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
    name:{type:String,require:true,unique:true},
    desc:{type:String},
    price:{type:String,require:true},
});

const productModel=mongoose.model('product',productSchema);

module.exports=productModel;