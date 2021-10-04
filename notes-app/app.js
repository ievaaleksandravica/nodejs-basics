// const add = require('./utils.js');
// const sum = add(2, 3);
// console.log(sum);

const getNotes = require('./notes.js');
const chalk = require('chalk');
// const validator = require('validator');

console.log(getNotes());
// console.log(validator.isEmail('ieva@example.com'));
// console.log(validator.isURL('https://example.com'))
console.log(chalk.green.bold.inverse('success!'))
