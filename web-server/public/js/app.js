console.log('Client side javascript file is loaded!');

// for client side js, use `fetch` and`then` method to replicate behaviour of async js and retrieve API data
// fetch('https://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })

const weatherform = document.querySelector('form')
const search = document.querySelector('input')
const image = document.querySelector('.weather-img')
const data1 = document.querySelector('#data1')
const data2 = document.querySelector('#data2')

const getLocation = (search) => {
    fetch(`/weather?address=${search}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                data1.textContent = ''
                data2.textContent = 'Sorry but no results are matching: ' + data.error
            }
            else {
                data1.textContent = 'You searched for: ' + search
                data2.textContent = 'Weather forecast for ' + data.location + ' is here: ' + data.forecast
                var image = new Image();
                image.src = data.image;
                document.getElementById('weather-outcome').appendChild(image)
            }

        })
    })
}


weatherform.addEventListener('submit', (event) => {
    data1.textContent = 'LOADING....'
    data2.textContent = ''
    event.preventDefault()
    const location = search.value
    getLocation(location)
    image.remove()
    search.value = ''
})