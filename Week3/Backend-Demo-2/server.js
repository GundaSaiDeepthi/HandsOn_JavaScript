import exp from 'express'
import { userApp } from './APIs/UserAPI.js'
import { connect } from 'mongoose'
import { productApp } from './APIs/ProductAPI.js'
const app = exp()
const port = 4000

//connect to db server
async function connectDB() {
    try {
        await connect('mongodb://127.0.0.1:27017/anuragdb2')
        console.log("DB connected success")
        //Assigning port number
        app.listen(port,()=>console.log("Server is listening on port 4000.."))
    } catch (error) {
        console.log("Error while connecting to DB", error)
    }

}
connectDB()

//body parser middleware
app.use(exp.json())
//if path starts with /user, forward the request to userApp
app.use('/user-api',userApp)
app.use('/product-api',productApp)

//express send error in the form of html file but we a=can customize uisng te following
//error handling middleware
/*function errorHandler(err,req,res,next){
res.json({message:"error",reason:err.message})
}
app.use(errorHandler)*/
app.use((err,req,res,next)=>{
    res.status(200).json({message:"error",reason:err.message})
})