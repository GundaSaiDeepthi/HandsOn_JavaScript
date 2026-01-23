//Assignment 2: Exam Result Summary


const marks={
    maths:78,
    physics:65,
    chemistry:82,
    english:55
}
let c=0
let sum=0
let max=0
for(let v in marks){
//1. Calculate total marks
sum+=marks[v]
c++
if(v>max){
//3. Find the highest scoring subject
    max=v
}
}

console.log(sum)
//2. Calculate average marks
console.log(sum/c)
console.log(max)
//4. Add a new subject computer: 90
marks.computer=90
console.log(marks)