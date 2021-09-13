const notes = require('../controller/notes.controllers');
const router = require('express').Router()

module.exports = () => {

    //create new note
    router.post('/notes/create', notes.create)
    
    //retrieve all notes
    router.get('/notes/findAll', notes.findAll)
    
    //delete note
    router.delete('/notes/delete', notes.delete)
    
    //retrieve single note
    router.get('/notes/findOne', notes.findOne)
    
    //update notes
    router.put('/notes/update', notes.update)

    return router
}