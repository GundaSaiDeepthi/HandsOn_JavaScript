//ASSIGNMENT 4:Movie Streaming Platform

const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

    //1. filter() only "Sci-Fi" movies
      let result1=movies.filter(movieObj=>movieObj.genre==="Sci-Fi")
      console.log(result1)

    //2. map() to return:"Inception (8.8)"
      let result2=movies.map(movieObj=>movieObj.title+ "("+movieObj.rating+")")
      console.log(result2)

    //3. reduce() to find average movie rating
      let total=movies.reduce((accumulator,movieObj)=>accumulator+movieObj.rating,0)
      let result3=total/movies.length
      console.log(result3)

    //4. find() movie "Joker"
      let result4=movies.find(movieObj=>movieObj.title==="Joker")
      console.log(result4)

    //5. findIndex() of "Avengers"
      let result5=movies.findIndex(movieObj=>movieObj.title==="Avengers")
      console.log(result5)
