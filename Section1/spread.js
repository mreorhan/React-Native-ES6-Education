const data = [1,5,9,752]
const newData = [2,...data]
 newData[0]={name:'emre'}
console.log(...newData)
let x = 4;
x=5;
console.log("x",x)
const numbers = [1,2,3,4];
const newNumbers = numbers.map(number => number + 1);
const nn2 = numbers.map(number=>{
    return number
})
console.log(nn2)
console.log(newNumbers);

const obj = {name:"emre"}
obj.lastName="orhan"

console.log(obj)
/*
const numbers = [1,2,3,4];

const newNumbers = numbers.filter(number => number > 3);

console.log(newNumbers);/* */