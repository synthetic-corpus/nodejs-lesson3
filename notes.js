console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
  try {
    // "Try" is used here because the Json file may not exist
    var notestring = fs.readFileSync('notes-data.json');
    return JSON.parse(notestring);
  } catch (error) {
    return [];
  }
}

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = (title, body) => {
  console.log('Adding note', title, body);
  let notes = fetchNotes();
  // Key Value pairs here will be 'title: title'
  let note = {
    title,
    body
  };

  // Function gets called per item in array.
  // Fucntion returns T/F. If True.. add to the array "duplicateNotes".
  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return "this note, ",note.title," was saved."
  } else {
    // do Nothing. Note is already in the block, but maybe we will udpate it later.
    return "A noted called ",note.title," already exists. Note not saved.";
  }
};

var getAll = () => {
  console.log('Getting all notes');
};

var getNote = (title) => {
  console.log('Getting note', title);
};

var removeNote = (title) => {
  console.log('Removing note', title);
};
// In this version of Javascript, addNote is equivalent to addNote: addNote.
module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
