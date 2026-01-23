 //Assignment 1: Smart Login Status Engine

let isLoggedIn=true
let isProfileComplete=false
let msg

    if(isLoggedIn){
        //3. If logged in and profile complete → show "Welcome back!"
        if(isProfileComplete){
            //4. Store the result in message
            msg="Welcome back!"
        }
         //2. If logged in but profile incomplete → show "Complete your profile"
        else{
            //4. Store the result in message
            msg="Complete Your Profile"
        }
    }
    //1. If user is not logged in → show "Please login"
    else{
        //4. Store the result in message
        msg="Please Login"
    }
    //5. Print the message
    console.log(msg)

