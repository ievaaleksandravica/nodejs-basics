console.log('utils.js')

const name = 'Ieva Aleksandravica';
const add = function (a, b) {
    return a + b;
}

// this is where you define everything that you want to share with other files, it becomes available in other files when you require
module.exports = add