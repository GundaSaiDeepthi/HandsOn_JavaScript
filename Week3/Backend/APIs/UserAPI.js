 import exp from 'express'
 //create mini express(Separate Route) app

  export const userApp=exp.Router()
 //test local in-memory 
 let users=[];

    //get req handling route(Read User)
    userApp.get('/users',(req,res)=>{
        //send users data in res
        res.status(200).json({message:"all users",payload:users}) //message,payload are custom keys,,payload cantains users data
    })//status 200 means successful operation

    //post req handling route(Create User)
    //writing middleware function as this only execute for post req we should not write like this..middleware2()-->this means we are calling but it should execute so write middleware2
    userApp.post('/users',(req,res)=>{
       
        //get user resourse from req
        let newUser=req.body
        //console.log("New User:",newUser) //to check
        //insert newUser into users array
        users.push(newUser);
        res.status(201).json({message:"User Created"})
    }) //status 201 is used for resource creation

    //put req handling route(Update User)
    userApp.put('/users',(req,res)=>{
        
        //get modified user from req
        let modifiedUser=req.body
        //find the user with id exists in array
        //let userFind=users.find(usersObj=>usersObj.id===modifiedUser.id)//we need index for efficient modification
        let userIndex=users.findIndex(usersObj=>usersObj.id===modifiedUser.id)
        //console.log("User:",userFind)
      /* if(userFind){
        userFind.name=modifiedUser.name,
        userFind.age=modifiedUser.age*/
         //if user not found, send res as "user not found"
         if(userIndex===-1){
             return res.status(404).json({message:"User not found"})
       }
       
     //if user found,then modify the user
     let deletedUser=users.splice(userIndex,1,modifiedUser) //it has to return modified user
       //send res as "User Modified"
        res.status(200).json({message:"User modified"})
       
    })

    //read user by id
    //:id is a url parameter
    userApp.get('/users/:id',(req,res)=>{

        console.log(req.params)//we will get string as o/p even number also
        //read id from url parameter
       let userId=Number(req.params.id)  
        //params return an object{id : 104}
        //convert string into number by using Number()
        //read user by id
        let user=users.find(userObj=>userObj.id===userId)
        if(!user){
            return res.status(404).json({message:"User not found"})
        }
        
        res.status(200).json({message:"user",payload:user})
    })

    

    //delete req handling route(Delete User)
    userApp.delete('/users/:id',(req,res)=>{
    console.log(req.params)

        //read id from url parameter
       let userId=Number(req.params.id)  
      
        //read user by id
        let userIndex=users.findIndex(userObj=>userObj.id===userId)
        if(userIndex===-1){
            return res.status(404).json({message:"User not found"})
        }
        let deletedUser=users.splice(userIndex,1)//no need to return anything
        res.status(200).json({message:"user deleted",payload:deletedUser})
    })

