const fs = require('fs');
const chalk = require('chalk');
const { captureRejections } = require('events');

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title)
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        console.log(chalk.green('New note successfully added!'))
    } else {
        console.log(chalk.red('Sorry, this note already exists!'))
    }
    const updatingNotes = saveNotes(notes)
};

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title);
    if (notes.length !== notesToKeep.length) {
        const updateNotes = saveNotes(notesToKeep);
        console.log(chalk.green('Note successfully removed!'))

    } else {
        console.log(chalk.red('No such note could be found!'))
    }
}

const listNotes = () => {
    const allNotes = loadNotes();
    allNotes.forEach((note) => {
        console.log(chalk.green('- ') + chalk.green(note.title))
    })
}

const readNote = (title) => {
    const allNotes = loadNotes();
    const note = allNotes.find((note) => title === note.title);
    if (note) {
        console.log(chalk.white.inverse(note.title) + ' - ' + chalk.gray(note.body))
    } else {
        console.log(('No note with title: "') + chalk.red.bold(title) + ('" could be found'))
    }
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
};

const saveNotes = (notes) => {
    const stringifyData = JSON.stringify(notes);
    const pushData = fs.writeFileSync(
        'notes.json', stringifyData
    )
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}