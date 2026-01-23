//Assignment 1: Date Creation & Extraction (Beginner)

//Tasks:
       //1. Create a Date object for current date & time.
       let date=new Date(Date.now())
       console.log(date)
      // 2. Extract and display:
                   // * Year
                   console.log("Year:",date.getFullYear())
                   // * Month (human readable)
                   console.log("Month:",date.getMonth()+1)
                    //* Date
                    console.log("Date:",date.getDate())
                    //* Day of week
                    console.log("Day:",date.getDay())
                    //* Hours, minutes, seconds
                    console.log("Hours:",date.getHours())
                    console.log("Minutes:",date.getMinutes())
                    console.log("Seconds:",date.getSeconds())

      //3. Display the date in this format:
                    //DD-MM-YYYY HH:mm:ss

      //console.log(date.toLocaleString())
      console.log(date.getDate(),"-",date.getMonth(),"-",date.getFullYear()," ",date.getHours(),":",date.getMinutes(),":",date.getSeconds())


