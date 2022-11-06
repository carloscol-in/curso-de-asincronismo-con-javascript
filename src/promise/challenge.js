import fetch from 'node-fetch'


const API = 'https://api.escuelajs.co/api/v1'

async function fetchData(urlApi) {
    return await fetch(urlApi).then(res => res.json())
}

fetchData(`${API}/products`)
    .then(products => {
        return fetchData(`${API}/products/${216}`)
    })
    .then(product => {
        console.log(product)
        return fetchData(`${API}/categories/${product.category.id}`)
    })
    .then(category => console.log(category))
    .catch(console.error)