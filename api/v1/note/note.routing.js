const ctrl = require('./note.controller');

module.exports.initRoutes = (app) => {
    console.log("Initilizing Note Routes");
    app.get('/api/v1/notes', (req, res, next) => {

        res.status(200).json({data: "Notes"})
    });
    app.post('/api/v1/notes/', function (req,res, next) {
        const note = req.body.note;
        console.log("I Want to make a note");
        console.log(body.note.title);
        console.log(body.note.note);
        res.status(200).json({data: "I want to make a note"});
        
        if (note) ctrl.newNote({title: "", note: ""});
        else ctrl.newNote(note);
    })
}