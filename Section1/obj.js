const object= {
    "name":"emre",
    "lastname":"orhan"
}
console.log(JSON.stringify(object,null,1))


//
const user = new Object(); 
user.name = "Emre",
user.lastName = "Orhan";

console.log(user.name);
console.log(user["name--"]);