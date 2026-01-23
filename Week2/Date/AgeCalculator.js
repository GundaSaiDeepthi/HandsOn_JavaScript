//Assignment 3: Age Calculator (Intermediate)

//Input:
    let dob ="2000-05-15";
    let birthdate=new Date(dob)


//Tasks:
        //1. Calculate exact age in years
        let datetoday=new Date(Date.now())
        let age=datetoday.getFullYear()-birthdate.getFullYear();
        if(birthdate.getMonth()>datetoday.getMonth() ||
        (datetoday.getMonth()===birthdate.getMonth()&&birthdate.getDate()>datetoday.getDate())){
            age--;
            
        }
        console.log("Age is:",age)
        