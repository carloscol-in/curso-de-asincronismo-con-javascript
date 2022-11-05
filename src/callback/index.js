function sum(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function calc(num1, num2, callback) {
    return callback(num1, num2)
}

console.log(calc(2, 3, sum))
console.log(calc(8, 5, subtract))

setTimeout(() => {
    console.log('Hola JavaScript')
}, 2000)

function greet(name) {
    console.log(`Hola, ${name}`)
}

setTimeout(greet, 2000, 'Carlos')