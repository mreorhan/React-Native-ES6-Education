const test = function (sayi, callback) {
    callback(sayi);
};
test(4,(data)=>{
    console.log(data)
    test(6,(data)=>{
        console.log(data)
    })
})

const fetch=id=>{
    const data={
        id:"123",
        name:"emre",
        lastName:"orhan"
    }
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(data.id===id)
                resolve(data)
            else
                reject("Something went wrong")
        },2000)
    })
}

fetch("1231")
.then((data)=>{
    console.log(data)
})
.catch(err=>console.log(err))