//Assignment-5  Student Performance Dashboard

const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

//1.filter() students who passed (marks ≥ 40)
  let result1=students.filter(studentObj=>studentObj.marks>=40)
  console.log(result1)

/*2.map() to add a grade field
        ≥90 → A
        ≥75 → B
        ≥60 → C
        else → D */
    let result2=students.map(studentObj=>{
        let grade
        if(studentObj.marks>=90) studentObj.grade='A'
        else if(studentObj.marks>=75) studentObj.grade='B'
        else if(studentObj.marks>=60) studentObj.grade='C'
        else studentObj.grade='D'
        return studentObj
    })
    console.log(result2)

//3.reduce() to calculate average marks
  let total=students.reduce((accumulator,studentObj)=>accumulator+studentObj.marks,0)
  let result3=total/students.length
  console.log(result3)

//4.find() the student who scored 92
  let result4=students.find(studentObj=>studentObj.marks===92)
  console.log(result4)

//5.findIndex() of student "Kiran"
  let result5=students.findIndex(studentObj=>studentObj.name==="Kiran")
  console.log(result5)