
const fetchPersonalInfo = (id,duration=0) => {
    return new Promise((resolve, reject) => {
        const data = 
            {
                "_id": "5af830f2a1507929ec16a221",
                "profilePhoto": "emre.jpg",
                "username": "emreorhan",
                "name": "Emre",
                "lastName": "Orhan",
                "createdDate": "2018-05-13T12:34:58.928Z"
            }
        setTimeout(() => {
            if (data._id === id)
                resolve(data);
            else
                reject("Bilgiler Çekilemedi");
        }, duration)

    })
};

console.log("yükleniyor...");
fetchPersonalInfo("5af830f2a1507929ec16a221",2000)
    .then((data) => {
        console.log(data);
        //return data // pass data
    })
    .then(()=>{
        console.log("Tamamlandı.")
    })
    .catch(error => {
        console.log(error);
    });
    
