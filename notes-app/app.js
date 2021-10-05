// const add = require('./utils.js');
// const sum = add(2, 3);
// console.log(sum);
const yargs = require('yargs');
const chalk = require('chalk');

const getNotes = require('./notes.js');

// const validator = require('validator');

// console.log(getNotes());
// console.log(validator.isEmail('ieva@example.com'));
// console.log(validator.isURL('https://example.com'))
// console.log(chalk.green.bold.inverse('important!'))

// const command = process.argv[2];

// if (command === "add") {
//     console.log('Executing add function..')
// } else if (command === "remove") {
//     console.log('Executing remove function..')
// } else {
//     console.log('Sorry, I do not know this function..')
// }

//customize yargs version
// yargs.version('1.1.0')
// console.log(process.argv);

// add, remove, read, list
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log('Adding a new note')
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove existing note',
    handler: function () {
        console.log('Removing this note')
    }
})

yargs.command({
    command: 'read',
    describe: 'Read existing note',
    handler: function () {
        console.log('Reading this specific note')
    }
})

yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function () {
        console.log('Listing all notes')
    }
})

console.log(yargs.argv);
