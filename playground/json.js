/*
let personString = '{"name":"Joel","age":36}';
let personObj = JSON.parse(personString);
console.log(typeof personObj);
console.log(personObj)

*/

const fs = require('fs');
const json = JSON;

let originalNote = {
  title: 'A Title',
  body: 'somebody wrote this'
}

// Convert to string
let originalNoteString = json.stringify(originalNote);

fs.writeFileSync('theFile.json',originalNoteString);

// File is now written as 'theFile'.
// Now make a notes
let noteString = fs.readFileSync('theFile.json');

let note = json.parse(noteString);

console.log(typeof note);
console.log(note.title);
