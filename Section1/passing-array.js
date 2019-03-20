function sum(...numbers) {
    let result = 0;
    numbers.forEach((number)=> {
        result += number;
    });
    return result;
}
console.log(sum(1)); // 1
console.log(sum(1, 2, 3, 4, 5)); // 15

//Tek satırda yazalım
//numbers.forEach(number=> result += number);