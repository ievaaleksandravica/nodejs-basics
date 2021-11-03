const doWorkCallback = (callback) => {
    setTimeout(() => {
        // callback('This is my error', undefined)
        callback(undefined, [1, 4, 7])
    }, 2000)
}

// runs when you have an error or result
doWorkCallback((error, result) => {
    if (error) {
        return console.log(error)
    }
    console.log(result)
})

// asynchronous callback function used within setTimeout function
// setTimeout(() => {
//     console.log('Two seconds are up')
// }, 2000)

// // synchronous callback function used within filter function
// const names = ['Andrew', 'Jen', 'Jess']
// const shortNames = names.filter((name) => name.length < 5)
// console.log(shortNames)


// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }
//         callback(data)
//     }, 5000)
// }

// geocode('Philadelphia', (data) => {
//     console.log(data)
// })


// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

// const add = (a, b, callback) => {
//     setTimeout(() => {
//         const sum = a + b;
//         callback(sum)
//     }, 2000)
// };

// add(1, 4, (sum) => {
//     console.log(sum) // Should print: 5
// })