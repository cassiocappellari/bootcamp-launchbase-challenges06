// Implemente uma função que receba como parâmetro um número e, após x milissegundos (dentre um intervalo de 1 a 100 ms. Utilize o setTimeout e as funções floor e random da biblioteca Math), mostre no console o dobro do parâmetro recebido. Em seguida, chame essa função 5 vezes.

// callback

function printDouble(number, callback) {
    setTimeout(function() {
        console.log(number * 2)
        callback()
    },
    Math.floor(Math.random() * 100) + 1
    )
}

function printAll() {
    printDouble(5, () => {
        printDouble(10, () => {
            printDouble(22, () => {
                printDouble(1, () => {
                    printDouble(89, () => {})
                })
            })
        })
    })
}

printAll()