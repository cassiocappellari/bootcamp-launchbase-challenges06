// callback

/*function printDouble(number, callback) {
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

printAll()*/

// promises

/*let printDoubleNumber = number => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(number * 2)
    },
    Math.floor(Math.random() * 100) + 1
    )
})

printDoubleNumber(5)
.then((results) => {
    console.log(results)
printDoubleNumber(10)
.then((results) => {
    console.log(results)
printDoubleNumber(22)
.then((results) => {
    console.log(results)
printDoubleNumber(1)
.then((results) => {
    console.log(results)
printDoubleNumber(89)
.then((results) => {
    console.log(results)
})
})
})
})
})*/

// async/await

async function printDoubleNumber(number) {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(number * 2)
        }, Math.floor(Math.random() * 100) + 1)
    })
}

const printAll = async () => {
    let results
    results = await printDoubleNumber(5)
    console.log(results)
    results = await printDoubleNumber(10)
    console.log(results)
    results = await printDoubleNumber(22)
    console.log(results)
    results = await printDoubleNumber(1)
    console.log(results)
    results = await printDoubleNumber(89)
    console.log(results)
}

printAll()