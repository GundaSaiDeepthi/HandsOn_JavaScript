import {Schema,model} from 'mongoose'

//Create Product Schema (pid,productName,price)
const productSchema=new Schema({
  
    pid:{
        type:Number,
        required:[true,"Pid is required"]
    },
    productName:{
        type:String,
        required:[true,"Product name is required"]
    },
    price:{
        type:Number,
        required:[true,"Price is required"]
       
    },
},{
  strict:"throw",  
  timestamps:true
});

//Create Product Model with that Schema
export const ProductModel=model("product",productSchema) 