//Create HTTP Server
    //Import express module (default export)
    import exp from 'express'; //we are not using ./ so it directly goes and searches in node_modules
    import { userApp } from './APIs/UserAPI.js';
    import { productApp } from './APIs/ProductsAPI.js';
    //Create Server
    const app=exp()
    //Assign port number
    app.listen(3000,()=>console.log('HTTP server listening on port 3000..'))

    //body parsing middleware
    app.use(exp.json())  

    //forward req to userApp when path starts with '/user-api'
    app.use('/user-api',userApp)
    app.use('/product-api',productApp)
    
 /*   
//custom middlewares
    function middleware1(req,res,next){
        console.log("middleware-1 executed")
        //send res
       // res.json({message:"res from middleware"})
       //forward  req to next middleware
       next()
    }

     function middleware2(req,res,next){
        console.log("middleware-2 executed")
        //send res
       // res.json({message:"res from middleware"})
       //forward  req to next middleware
       next()
    }
 
//to execute for every incoming req(it won't check is it get,post,put,delete..executes for every req)
 
//app.use(middleware1)
//req is caught by middleware and client will be waiting(loading) as we didn't inform what to do 
    //Create API(contains request handlers--route)
    //route handles the each request and send response
    */

    




   