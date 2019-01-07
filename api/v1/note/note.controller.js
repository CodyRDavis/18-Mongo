const db = require('./note.model');

const ctrl = {}

ctrl.newNote = function(note){
    db.create(note, (response) => {
        console.log("Created new Note");
    });
}

module.exports = ctrl;