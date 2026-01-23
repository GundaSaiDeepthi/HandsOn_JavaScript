//Hands-On 1: Shallow Copy (Controlled Mutation Use Case)

//Given Data:
              const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };

// Task
    //1. Create a shallow copy of user

    let copyOfUser={...user}
    console.log("user:",user)
    console.log("copyOfUser:",copyOfUser)
    //2. Change:
          //i. name in the copied object
          copyOfUser.name="Sai"
          console.log("After changing name:")
          //iii .Log both original and copied objects
          console.log("user:",user)
          console.log("copyOfUser:",copyOfUser)

         // ii. preferences.theme in the copied object
           copyOfUser.preferences.theme="light"
           console.log("After changing preference theme:")
           //iii .Log both original and copied objects
           console.log("user:",user)
          console.log("copyOfUser:",copyOfUser)

          //iv. Observe what changes and what doesn’t
          /*only name is copied as we are performing copy using spread operator and name is a primitive value
            for nested objects spread operator is not enough to copy the objects so  it is changed in both*/