const doWorkPromises = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve([2, 3, 4, 5])
        reject('Things went wrong')
    }, 2000)
})

doWorkPromises.then((result) => {
    console.log('Success!')
    console.log(result)
}).catch((error) => {
    console.log(error)
})

