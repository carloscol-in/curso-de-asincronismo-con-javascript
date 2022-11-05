const promise = new Promise(function (resolve, reject) {
    if (false) {
        resolve('Todo bien')
    }
    reject('Puras fallas')
})

promise
    .then(console.log)
    .catch(console.error)

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Adios')
    }, 2000)
})

promise2.then(console.log).catch(console.error)