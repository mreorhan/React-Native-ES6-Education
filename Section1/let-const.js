/*const x = 5;
x=6;
console.log("x degeri"+x)
*/
let name="emre"
name="isim degisti"
console.log(name)

const values = [1,2,3,4,5];
values.push(6);
//values.pop()
//values=8;
console.log(values)

const obj=[{name:"emre",name:{first:"emre2",first:"emre",last:"orhan"}}]

//arrayin sonraki elemanı
//obj.name="emre2"
/*
obj.push({name:"emre"})
obj.push({name:"emre"})*/
console.log(obj)




// Interpolate variable bindings
var namew = "Bob", time = "today";

console.log(`Hello ${namew},
how are you ${time}?`)