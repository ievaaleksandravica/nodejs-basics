console.log('Client side javascript file is loaded!');

// for client side js, use `fetch` and`then` method to replicate behaviour of async js and retrieve API data
// fetch('https://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })


fetch('/weather?address=!!!').then((response) => {
    response.json().then((data) => {
        if (data.error) {
            return console.log(data.error)
        }
        console.log('Weather forecast for ' + data.location + ' is here: ' + data.forecast)
    })
})