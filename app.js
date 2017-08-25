console.log('Starting app.js');

const fs = require('fs'); // Accesses File System
const _ = require('lodash'); // A common NPM utility Tool
const yargs = require('yargs'); // Provides a better way to work with Arguments.

const notes = require('./notes.js'); // Custom module
/*
argv returns an key/values pairs of the arguements.

e.g. --title="the book of Eli" becomes {title:'book of eli'}
*/
const argv = yargs.argv;
var command = argv._[0];
console.log('Command: ', command);
console.log('Yargs', argv);

if (command === 'add') {
  let itSays = notes.addNote(argv.title, argv.body);
  console.log(itSays);
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  notes.getNote(argv.title);
} else if (command === 'remove') {
  notes.removeNote(argv.title);
} else {
  console.log('Command not recognized');
}
