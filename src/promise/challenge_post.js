import fetch from 'node-fetch'

const API = 'https://api.escuelajs.co/api/v1'


async function postData(urlApi, data) {
    return await fetch(urlApi, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }).then(response => response.json())
}

const data = {
  'title': 'Un super producto',
  'price': 1999,
  'description': 'Un super producto que debes tener.',
  'categoryId': 1,
  'images': ['https://placeimg.com/640/480/any']
}

postData(`${API}/products`, data)
    .then(console.log)