//HANDS-ON 2: Course Price Tag Labeler

let price=1299;
let coursetag
//1. If price < 500 → "Budget Course"
if(price<500){
    //4. Store label in courseTag
    coursetag="Budget Course"
}
 //2. If price between 500–1000 → "Standard Course"
else if(price>=500 && price<=1000){
    //4. Store label in courseTag
    coursetag="Standard Course"
}
//3. If price > 1000 → "Premium Course"
else{
    //4. Store label in courseTag
    coursetag="Premium Course"
}
  //5. Print the label
console.log(coursetag)