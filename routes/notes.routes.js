const notes = require('../controller/notes.controllers');

module.exports = (app) => {

    //create new note
    app.post('/notes', notes.create);
    
    //retrieve all notes
    app.get('/notes', notes.findAll)
    
    //delete note
    app.delete('/notes', notes.delete)
    
    //retrieve single note
    app.get('/notes', notes.findOne)
    
    //update notes
    app.put('/notes', notes.update)

}