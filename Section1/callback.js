
ret = (a, callback) => {
    a+=2;
    callback(a);
}

ret(4, (sonuc) => {
    console.log(sonuc)
    ret(6, (sonuc) => {
        console.log(sonuc)
        setTimeout(() => {
            ret(8, sonuc => {
                console.log(sonuc)
                ret(10, sonuc => console.log(sonuc))
            })
        }, 200)
        
        //ret(12, sonuc => console.log(sonuc))
    })
})