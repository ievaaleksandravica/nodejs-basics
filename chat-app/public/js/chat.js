const socket = io()

socket.on('sendWelcomeMessage', (message) => {
    console.log(message)
})

document.querySelector('#message-form').addEventListener('submit', (event) => {
    event.preventDefault()
    const response = event.target.elements.message.value
    socket.emit('sendMessage', response)
})

// socket.on('countUpdated', (count) => {
//     console.log('The count has been updated: ' + count)
// })

// document.querySelector('#increment').addEventListener('click', () => {
//     console.log('Clicked')
//     socket.emit('increment')
// })