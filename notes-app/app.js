// const add = require('./utils.js');
// const sum = add(2, 3);
// console.log(sum);

const getNotes = require('./notes.js');
const chalk = require('chalk');
// const validator = require('validator');

// console.log(getNotes());
// console.log(validator.isEmail('ieva@example.com'));
// console.log(validator.isURL('https://example.com'))
// console.log(chalk.green.bold.inverse('important!'))

console.log(process.argv);

const command = process.argv[2];

if (command === "add") {
    console.log('Executing add function..')
} else if (command === "remove") {
    console.log('Executing remove function..')
} else {
    console.log('Sorry, I do not know this function..')
}