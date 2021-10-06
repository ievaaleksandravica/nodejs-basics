// good for modeling data
// JSON always has double quotes.
const fs = require('fs');

// JS object
const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
};

// 1. FROM JS TO JSON
const bookJSON = JSON.stringify(book);
// 2. FROM JSON TO JS
const parsedData = JSON.parse(bookJSON);

// Push data to another file.
// fs.writeFileSync('1-json.json', bookJSON)

// Get data from another file - output in buffer binary format
const dataBuffer = fs.readFileSync('1-json.json');
// Convert the data in standard string
const dataJSON = dataBuffer.toString();
// Parse the string to get JS Object
const data = JSON.parse(dataJSON);
console.log(data.title)