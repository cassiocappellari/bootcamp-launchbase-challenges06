// promise

/*function doubleNumber(number1, number2) {
    const results = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve((number1 * 2) + (number2))
        },
        Math.floor(Math.random() * 100) + 1
        )
    })
    return results
}

let result = doubleNumber(5, 0)
.then((result) => {
    console.log(result)
doubleNumber(12, result)
.then((result) => {
    console.log(result)
doubleNumber(2, result)
.then((result) => {
    console.log(result)
})
})
})*/

// async/await

/*async function doubleNumber(number1, number2) {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve((number1 * 2) + (number2))
        },
        Math.floor(Math.random() * 100) + 1
        )
    })
}

const results = async () => {
    let result
    result = await doubleNumber(5, 0)
    console.log(result)
    result = await (doubleNumber(12, result))
    console.log(result)
    result = await (doubleNumber(2, result))
    console.log(result)
}

results()*/

// callbacks

function printDouble(number1, number2, callback) {
    setTimeout(() => {
        const total = number1 * 2 + number2
        console.log(total)
        callback(total)
    }, Math.floor(Math.random() * 100) + 1)
}

printDouble(5, 0, (total) => {
    printDouble(12, total, (total) => {
        printDouble(2, total, () => {})
    })
})