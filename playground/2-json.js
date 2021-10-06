// 1. Load and parse the JSON Data
// 2. Change the name and age property
// 3. Stringify the changed object and overwrite the original data
// 4. Test your data

const fs = require('fs')

const bufferData = fs.readFileSync('2-json.json');
const jsonData = bufferData.toString();
const parsedData = JSON.parse(jsonData);
parsedData.name = 'Ieva';
parsedData.age = 31;
const jsonDataReverse = JSON.stringify(parsedData);
console.log(jsonDataReverse);
const pushJsonData = fs.writeFileSync('2-json.json', jsonDataReverse);