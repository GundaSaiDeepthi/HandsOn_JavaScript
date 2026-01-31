import exp from 'express'
import { ProductModel } from '../models/ProductModel.js'
export const productApp=exp.Router()


//Product API Routes

//Create a new Product
productApp.post('/products',async(req,res)=>{
    //get new product from req
    let newProduct=req.body
    //create new user document
    let newProductDoc=new ProductModel(newProduct)
    //save in db
    await newProductDoc.save()
    //send res
    res.status(201).json({message:"Product Added"})
})

//Read Products
productApp.get('/products',async(req,res)=>{
    //get products from db
    let productsList=await ProductModel.find()
    //send res
    res.status(200).json({message:"products",payload:productsList})
})


//Read products by objectId
productApp.get('/products/:id',async(req,res)=>{
    //get objectId from url params
    let objId=req.params.id
    //find user in db
    let productObj=await ProductModel.findById(objId)
    //send res
    res.status(200).json({message:"Product",payload:productObj})
})

//Update product
productApp.put('/products/:id',async(req,res)=>{
    //get object Id from url params
    let objId=req.params.id
    //get modified product from req
    let modifiedProduct=req.body
    //make update
    let latestProduct=await ProductModel.findByIdAndUpdate(objId,
        {$set:{...modifiedProduct}},
        {new:true, runValidators:true})
    //send res
    res.status(200).json({message:"Product Modified",payload:latestProduct})
})

//delete product by objectId
productApp.delete('/products/:id',async(req,res)=>{
    //get objectId from url params
    let objId=req.params.id
    //delete product by id
    let deletedProduct=await ProductModel.findByIdAndDelete(objId)
    //send res
    res.status(200).json({message:"Product Removed",payload:deletedProduct})
})
