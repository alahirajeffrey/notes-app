const notes = require('../controller/notes.controllers');
const router = require('express').Router()

module.exports = () => {

    //create new note
    router.post('/notes', notes.create);
    
    //retrieve all notes
    router.get('/notes', notes.findAll)
    
    //delete note
    router.delete('/notes', notes.delete)
    
    //retrieve single note
    router.get('/notes', notes.findOne)
    
    //update notes
    router.put('/notes', notes.update)

}