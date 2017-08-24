console.log('Starting notes.js');

var addNote = (title, body) => {
  console.log('Adding note', title, body);
  let notes = [];
  // Key Value pairs here will be 'title: title'
  let note = {
    title,
    body
  };

  try {
    // "Try" is used here because the Json file may not exist
    var notestring = fs.readFileSync('notes-data.json');
  } catch (e) {
    // Do nothing on an error
  }
  // Unsure what this line does right now
  // Function gets called per item in array.
  // Fucntion returns T/F. If True.. add to the array "duplicateNotes".
  var duplicateNotes = notes.filters((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
  } else {
    // do Nothing. Note is already in the block, but maybe we will udpate it later.
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
