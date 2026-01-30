 import exp from 'express'
 // create mini-express(Separate Route) app
 export const productApp=exp.Router()
 //Products
    let products=[];

    //get req handling route(Read User)
    productApp.get('/products',(req,res)=>{
        //send users data in res
        res.status(200).json({message:"all products",payload:products})
    })

     //post req handling route(Create Product)
    productApp.post('/products',(req,res)=>{
       
        //get user resourse from req
        let newProduct=req.body
        //console.log("New User:",newUser) //to check
        //insert newUser into users array
        products.push(newProduct);
        res.status(201).json({message:"Product Added"})
    }) 

     //put req handling route(Update User)
    productApp.put('/products',(req,res)=>{
        
        //get modified product from req
        let modifiedProduct=req.body
        let productIndex=products.findIndex(productsObj=>productsObj.productId===modifiedProduct.productId)
         //if product not found, send res as "product not found"
         if(productIndex===-1){
             return res.status(404).json({message:"Product not found"})
       }
       
     //if product found,then modify the user
     let deletedProduct=products.splice(productIndex,1,modifiedProduct)
       //send res as "Product Modified"
        res.status(200).json({message:"Product modified"})  
    })

    //read product by id
    productApp.get('/products-id/:productId',(req,res)=>{

        console.log(req.params)
        //read id from url parameter
       let productId=Number(req.params.productId)  
        //read user by id
        let product=products.find(productObj=>productObj.productId===productId)
        if(!product){
            return res.status(404).json({message:"Product not found"})
        }
        
        res.status(200).json({message:"Product",payload:product})
    })
 

    //read product by brand
    productApp.get('/products-brand/:brand',(req,res)=>{
        console.log(req.params)
                //read brand from url parameter
       let productBrand=req.params.brand  
        //read user by id
        let product=products.find(productObj=>productObj.brand.toLowerCase()===productBrand.toLowerCase())
        if(!product){
            return res.status(404).json({message:"Product not found"})
        }
        
        res.status(200).json({message:"Product",payload:product})
    })

    
        //delete req handling route(Delete product)
        productApp.delete('/products/:productId',(req,res)=>{
        console.log(req.params)
    
            //read id from url parameter
           let productId=Number(req.params.productId)  
          
            //read product by id
            let productIndex=products.findIndex(productObj=>productObj.productId===productId)
            if(productIndex===-1){
                return res.status(404).json({message:"Product not found"})
            }
            let deletedProduct=products.splice(productIndex,1)//no need to return anything
            res.status(200).json({message:"Product deleted",payload:deletedProduct})
        })