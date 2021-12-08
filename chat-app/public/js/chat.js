const socket = io()

socket.on('message', (message) => {
    console.log(message)
})

document.querySelector('#message-form').addEventListener('submit', (event) => {
    event.preventDefault()
    const response = event.target.elements.message.value

    socket.emit('sendMessage', response, (error) => {
        if (error) {
            return console.log(error)
        }
        console.log('The message was delivered.')
    })
})

document.querySelector('#send-location').addEventListener('click', (event) => {
    if (!navigator.geolocation) {
        return alert('Geolocation is not supported by your browser.')
    }
    navigator.geolocation.getCurrentPosition((position) => {
        const coordinates = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        }
        socket.emit('sendLocation', coordinates, () => {
            console.log('Location shared')
        })
    })
})
// socket.on('countUpdated', (count) => {
//     console.log('The count has been updated: ' + count)
// })

// document.querySelector('#increment').addEventListener('click', () => {
//     console.log('Clicked')
//     socket.emit('increment')
// })