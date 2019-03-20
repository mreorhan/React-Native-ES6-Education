
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
getData=async()=>{
   console.log("yükleniyor...")
   const result = await fetchPersonalInfo("5af830f2a1507929ec16a221",2000);
   
   console.log(JSON.stringify(result))
}

console.log(getData())