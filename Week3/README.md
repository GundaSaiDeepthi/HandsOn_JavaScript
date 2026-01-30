/*
//Create HTTP Server
    //Import express module (default export)
    import exp from 'express'; //we are not using ./ so it directly goes and searches in node_modules
    //Create Server
    const app=exp()
    //Assign port number
    app.listen(3000,()=>console.log('HTTP server listening on port 3000..'))


    //Create API(contains request handlers--route)
    //route handles the each request and send response

    //get req handling route(Read User)
    app.get('/users',(req,res)=>{
        //send res to client
        res.json({message:"This is response from GET req handler"}) //express converts js obj into json
    })

    //post req handling route(Create User)
    app.post('/users',(req,res)=>{
        //send res
        res.json({message:"This is response from POST req handler"})
    })

    //put req handling route(Update User)
    app.put('/users/id',(req,res)=>{
        //send res
        res.json({message:"This is response from PUT req handler"})
    })

    //delete req handling route(Delete User)
    app.delete('/users/id',(req,res)=>{
        //send res
        res.json({message:"This is response from DELETE req handler"})
    })
*/