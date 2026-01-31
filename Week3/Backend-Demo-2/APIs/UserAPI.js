import exp from 'express'
import {UserModel} from '../models/UserModel.js'
export const userApp=exp.Router()

//USER API ROUTES


//Create User
userApp.post('/users',async(req,res)=>{
    //get newUser from req
    let newUser=req.body;
    //create newUser document
    let newUserDoc=new UserModel(newUser)
    //save in db
    await newUserDoc.save()
    //send res
    res.status(201).json({message:"User Created"})
})


//Read User
userApp.get('/users',async(req,res)=>{
    //read users from DB
  let usersList=await UserModel.find()
  //send res
  res.status(200).json({message:"users",payload:usersList})
})


//Read user by ObjectID
userApp.get('/users/:id',async(req,res)=>{
    //get ObjectID from url param
    let objId=req.params.id
    //find user in DB
    let userObj=await UserModel.findById(objId)
    //send res
    res.status(200).json({message:"user",payload:userObj})
})



//Update User
userApp.put('/users/:id',async(req,res)=>{
    //get objectId from url params
    let objId=req.params.id
    //get modified user from req
    let modifiedUser=req.body
    //make update
   let latestUser= await UserModel.findByIdAndUpdate(objId,
    {$set:{...modifiedUser}},
    {new: true, runValidators:true});
    //send res
    res.status(200).json({message:"User Modified",payload:latestUser})
})


//Delete User 
userApp.delete('/users/:id',async(req,res)=>{
    //get objectId from url params
    let objId=req.params.id
    //delete user by id
    let deletedUser= await UserModel.findByIdAndDelete(objId)
    //send res
    res.status(200).json({message:"User Removed",payload:deletedUser})
})
