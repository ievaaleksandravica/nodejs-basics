const socket = io()

// Elements
const $messageForm = document.querySelector('#message-form')
const $messageFormInput = $messageForm.querySelector("input")
const $messageFormButton = $messageForm.querySelector("button")
const $messages = document.querySelector("#messages")

// Templates
const messageTemplate = document.querySelector("#message-template").innerHTML

socket.on('message', (message) => {
    console.log(message)
    const html = Mustache.render(messageTemplate, {
        message: message
    })
    $messages.insertAdjacentHTML('beforeend', html)
})

$messageForm.addEventListener('submit', (event) => {
    event.preventDefault()
    $messageFormButton.setAttribute("disabled", "disabled")
    const response = event.target.elements.message.value

    socket.emit('sendMessage', response, (error) => {
        $messageFormButton.removeAttribute("disabled")
        $messageFormInput.value = ''
        $messageFormInput.focus()
        if (error) {
            return console.log(error)
        }
        console.log('The message was delivered.')
    })
})

const $sendLocationButton = document.querySelector('#send-location')
const $locationStatus = document.querySelector('#location-status')


$sendLocationButton.addEventListener('click', (event) => {
    if (!navigator.geolocation) {
        return alert('Geolocation is not supported by your browser.')
    }
    $sendLocationButton.setAttribute('disabled', 'disabled')
    $locationStatus.innerHTML = 'Finding your location...'
    navigator.geolocation.getCurrentPosition((position) => {
        const coordinates = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        }
        $sendLocationButton.removeAttribute('disabled')
        $locationStatus.innerHTML = ''
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