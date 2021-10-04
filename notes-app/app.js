// need to provide relative path - with ./ you can go to the folder where you are at and then access the file.
// const add = require('./utils.js');
// const sum = add(2, 3);

// here you run the things from this file.
// console.log(sum);

const message = require('./notes.js');
const chalk = require('chalk');

// const validator = require('validator');

console.log(message());
// console.log(validator.isEmail('ieva@example.com'));
// console.log(validator.isURL('https://example.com'))
console.log(chalk.green.bold.inverse('success!'))
