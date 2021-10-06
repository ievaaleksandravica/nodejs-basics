const fs = require('fs');
const chalk = require('chalk');


const getNotes = function () {
    return "Your notes..."
}

const addNote = function (title, body) {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })
    if (duplicateNotes.length === 0) {
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

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
};

const saveNotes = function (notes) {
    const stringifyData = JSON.stringify(notes);
    const pushData = fs.writeFileSync(
        'notes.json', stringifyData
    )
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote
}