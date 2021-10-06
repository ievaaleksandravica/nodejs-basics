// const add = require('./utils.js');
// const sum = add(2, 3);
// console.log(sum);
const yargs = require('yargs');
const chalk = require('chalk');

const notes = require('./notes.js');
const { readNote } = require('./notes.js');

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
    builder: {
        title: {
            describe: 'Add a new note',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Description of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
        console.log(chalk.gray('Title: '), chalk.bold.green(argv.title)),
            console.log(chalk.gray('Body:  '), chalk.green(argv.body))
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove existing note',
    builder: {
        title: {
            describe: 'Title of note to remove',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
        console.log(chalk.gray(argv.title))
    }
})

yargs.command({
    command: 'read',
    describe: 'Read existing note',
    builder: {
        title: {
            describe: 'Note title you want to reads',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        console.log('Reading note: ', chalk.green.bold(argv.title));
        readNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler() {
        console.log(chalk.white.inverse('Listing all notes:'))
        notes.listNotes();
    }
})

yargs.parse()
// console.log(yargs.argv);
