/*let me = {
    myname: "Bibigul",
    age: 27, 
    birthPlace: "Taraz", 
    programming: ["C++", "html", "css"],
    isStudent: true, 
    grade: "B", 
    myFunc(){
        console.log(`I am ${me.myname}, I was born in ${me.birthPlace}`)
    }
}

console.log(me)
me.programming.push("JavaScript")
console.log(me.programming)*/

function me(firstname, age, isStudent){
    this.firstname = firstname
    this.age = age
    this.isStudent = isStudent
    this.info = function(){
        if (isStudent === true) {
        console.log(`My name is ${firstname}, I'm ${age} years old. I am a student`)}
        else {
        console.log(`My name is ${firstname}, I'm ${age} years old. I am a teacher`)}
    }
}

let me1 = new me("Bibigul", 27, true)
let me2 = new me("Assel", 25, true)
let me3 = new me("Daulet", 30, false)
me1.info()
me2.info()
me3.info()