const { XMLHttpRequest } = require('xmlhttprequest')
const API = 'https://api.escuelajs.co/api/v1'

function fetchData(urlApi, callback) {
    let xhttp = new XMLHttpRequest()

    xhttp.open('GET', urlApi, true)
    xhttp.onreadystatechange = function (event) {
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText))
            }
        }
    }

    xhttp.send()
}

fetchData(`${API}/products`, (err, res1) => {
    fetchData(`${API}/products/${res1[0].id}`, (err, res2) => {
        console.log(res2.category.id)
        fetchData(`${API}/categories/${res2.category.id}`, (err, res3) => {
            console.log(res1[0], res2, res3)
        })
    })
})