export const fetchDataWithCallback = (url, callback) => {
    fetch(url)
    .then((data) => data.data)
        .then((data) => data.json())
        .then((data) => { callback(data) })
        .catch((e) => callback([{ error: "something went wrong" }]))
}


export const fetchData2 = async (url) => {
    let data = await fetch(url)
        .then((data) => {
            if (data.ok)
                return data.json()
            else
                throw new Error('error')
        })
        .catch((e) => { console.log(e) })
    return data;
}