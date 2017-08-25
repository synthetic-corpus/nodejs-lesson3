console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };
  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
  console.log('Getting all notes');
};

var getNote = (title) => {
  console.log('Getting note', title);
};

var removeNote = (title) => {
  let noteArray = fetchNotes();
  // filters into toBeSaved any note does *note* match the title
  let toBeSaved = noteArray.filter((note) => note.title !== title);
  saveNotes(toBeSaved);
  if (noteArray.length === toBeSaved.length) {
    return "nothing has been removed";
  } else{
    return `${title} was removed`;
  }
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
