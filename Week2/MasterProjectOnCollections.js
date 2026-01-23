const users = [
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: true },
  { id: 3, name: "Suman", role: "student", active: false }
];

//MODULE-1 :USER PROCESSING ENGINE
 // -> Get only active users
 let activeUsers=users.filter(userObj=>userObj.active===true)
 console.log(activeUsers)
  //-> Extract names of active users
  let activeUsersName=users.filter(userObj=>userObj.active===true).map(userObj=>userObj.name)
  console.log(activeUsersName)
  //-> Check if any admin exists
  let isAdmin=users.find(userObj=>userObj.role==="admin")
  console.log(isAdmin)
  //-> Find user by id
  let userId=users.find(userObj=>userObj.id===3)
  console.log(userId)
  //-> Deactivate a user immutably
let deactivateUser = 
  users.map(user =>
    user.id === 2 ? { ...user, active: false } : user
  );
  console.log(deactivateUser)


  
const courses = [
  { id: 101, title: "JavaScript", price: 999, published: true },
  { id: 102, title: "React", price: 1499, published: false },
  { id: 103, title: "Node", price: 1299, published: true }
];

//MODULE 2: COURSE CATALOG ENGINE
  //-> Get published courses
  let publishedCourses=courses.filter(coursesObj=>coursesObj.published===true)
  console.log(publishedCourses)

  //-> Sort courses by price (high → low)
  let sortedCourses = [...courses].sort((a, b) => b.price - a.price);
console.log(sortedCourses);

  //-> Extract { title, price } only
  let extractCourse = courses.map(({ title, price }) => ({ title, price }));
  console.log(extractCourse)

  //-> Calculate total value of published courses
  let total=courses.filter(coursesObj=>coursesObj.published==true)
  .reduce((sum,coursesObj)=>sum+coursesObj.price,0);
  console.log(total)

  //-> Add a new course immutably
  let newCourse={ id: 104, title: "Express", price: 1399, published: false}
  let updatedCourses=[...courses,newCourse];
  console.log(updatedCourses)


  const cart = [
  { courseId: 101, qty: 1 },
  { courseId: 103, qty: 2 }
];


//MODULE 3: SHOPPING CART ENGINE 
  //-> Merge cart with courses to get full course info
  const mergeCart = cart.map(item => {
  const course = courses.find(c => c.id === item.courseId);
  return {
    ...item,
    title: course.title,
    price: course.price
  };
});

console.log(mergeCart);

  //-> Calculate total cart amount
  const totalValue = cart.reduce((total, item) => {
  const course = courses.find(coursesObj=> coursesObj.id === item.courseId);
  return total + course.price * item.qty;
}, 0);

console.log(totalValue);

  //-> Increase quantity of a course (immutably)
  const courseIdToIncrease = 1;

const updatedCart = cart.map(item =>
  item.courseId === courseIdToIncrease
    ? { ...item, qty: item.qty + 1 }
    : item
);

console.log(updatedCart);

  //-> Remove a course from cart
  const courseIdToRemove = 2;

const filteredCart = cart.filter(
  item => item.courseId !== courseIdToRemove
);

console.log(filteredCart);

  //-> Check if all cart items are paid courses
  const isPaid = cart.every(item => {
  const course = courses.find(coursesObj=> coursesObj.id === item.courseId);
  return course.price > 0;
});

console.log(isPaid);


const roles = {
  admin: ["create", "update", "delete", "view"],
  student: ["view"]
};


//MODULE 4: ROLE & PERMISSION ENGINE
  //-> Get all role names
  let roleNames=Object.keys(roles)
  console.log(roleNames)

  //-> Check if student can delete
  let studentDelete = roles.student.indexOf("delete") !== -1;
console.log(studentDelete);

  //-> Create a flat list of all unique permissions
  let allPermissions = [
  ...new Set(Object.values(roles).flat())
];

console.log(allPermissions);

  //-> Add new role moderator immutably
  const updatedRoles = {
  ...roles,
  moderator: ["read", "delete"]
};

console.log(updatedRoles);
