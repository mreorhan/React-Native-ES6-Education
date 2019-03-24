export const fetchData = (url,callback) => {
    fetch(url)
        .then((data) => data.json())
        .then((data) => {callback(data)})
}