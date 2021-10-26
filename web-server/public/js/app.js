console.log('Client side javascript file is loaded!');

// for client side js, use `fetch` and`then` method to replicate behaviour of async js and retrieve API data
// fetch('https://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })

const getLocation = (search) => {
    fetch(`/weather?address=${search}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                return console.log(data.error)
            }
            console.log('Weather forecast for ' + data.location + ' is here: ' + data.forecast)
        })
    })
}

const weatherform = document.querySelector('form')
const search = document.querySelector('input')

weatherform.addEventListener('submit', (event) => {
    event.preventDefault()
    const location = search.value
    getLocation(location)
    search.value = ''
})