const users = []

const addUser = ({ id, username, room }) => {
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    if (!username || !room) {
        return { error: "Username and room are required." }
    }

    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    if (existingUser) {
        return { error: "Username is already in user." }
    }

    const user = { id, username, room }
    users.push(user)
    return { user }

}

const removingUser = (id) => {
    const index = users.findIndex((user) => {
        return user.id === id
    })

    if (index >= 0) {
        return users.splice(index, 1)
    }
}

const getUser = (id) => {
    const user = users.find((user) => {
        return user.id === id
    })
    return user
}

const getUsersInRoom = (room) => {
    const roomUsers = users.filter((user) => {
        return user.room === room
    })
    return roomUsers
}

module.exports = {
    addUser, removingUser, getUsersInRoom, getUser
}

// addUser({
//     id: 22,
//     username: 'Apple',
//     room: 'Berlin'
// })

// addUser({
//     id: 23,
//     username: 'AppleBanana',
//     room: 'Berlin'
// })

// addUser({
//     id: 24,
//     username: '12345',
//     room: 'Berlin'
// })

// console.log(users)
// const removedUser = removingUser(22)
// console.log("----> Removing user:")

// console.log(removedUser)
// console.log("----> Remaining users:")

// console.log(users)


// console.log("----> User found:")
// console.log(getUser(23))

// console.log("----> Users in room:")
// console.log(getUsersInRoom('berlin'))
