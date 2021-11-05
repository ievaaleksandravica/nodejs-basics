const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

// add(1, 2).then((response) => {
//     console.log(response)
//     add(response, 5).then((response) => {
//         console.log(response)
//     }).catch((error) => {
//         console.log(error)
//     })
// }).catch((error) => {
//     console.log(error)
// })

add(1, 1)
    .then((response) => {
        console.log(response)
        return add(response, 4)
    })
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })