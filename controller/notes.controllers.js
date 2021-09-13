const Note = require('../models/notes.model')

//create note
exports.create = (req, res) => {
    //validate request data
    if(!req.body){
        return res.status(400).send(
            {message : "Request data missing"}
        )
    }
    //create note
    const note = new Note({
        title : req.body.title,
        note : req.body.note
    })
    //save noe
    note.save()
        .then(data =>{
            res.send(data)
        }).catch(err =>{
            res.status(500).send({
                message : "Error.. Note not saved" 
            })
        })
}

//retrieve all notes
exports.findAll = (req, res) =>{
    //validate request data
    if(!req.body){
        return res.status(400).send(
            {message : "Request data missing"}
        )
    }
    //find all saved notes
    Note.find()
        .then(notes =>{
            res.send(notes)
        }).catch(err=>{
            res.status(500).send({
                message : 'Could not retrieve notes'
            })
        })
} 

//retrieve single note
exports.findOne = (req, res) =>{
    //validate request data
    if(!req.body.title){
        return res.status(400).send(
            {message : "Note title missing. Please include and try again"}
        )
    }
    //find single note 
    Note.findById(req.body.title)
        .then(note =>{
            if(!note){
                res.send(500).send({
                    message : "note not found"
                })
            }else{
                res.send(note)
            }
        }).catch(err =>{
            res.status(500).send({
                message:'Error occured'
            })
        })
}

//update note
exports.update = (req, res) =>{
    //validate request data
    if(!req.body.title){
        return res.status(400).send(
            {message : "Note tile missing. Please include and try again"}
        )
    }
    //update note
    Note.findByIdAndUpdate(req.body.title, {
        body : req.body.note
    }, {new: true})
        .then(note =>{
            if(!note){
                res.send(500).send({
                message : "note not found"
                })
            }else{
                res.send(note)
            }
        }).catch(err =>{
            res.status(500).send({
                message : "Error occured"
            })
        })
}

//delete note
exports.delete = (req, res) =>{
    //validate request data
    if(!req.body.title){
        return res.status(400).send(
            {message : "Note title missing. Please include as parameter and try again"}
        )
    }
    //delete note
    Note.findOneAndDelete(req.body.title)
        .then(note =>{
            if(!note){
                res.send(500).send({
                message : "note not found"
            })
            }else{
                res.send("Note deleted successfully")
            }
        }).catch(err =>{
            res.status(500).send({
                message : "Error occured"
            })
        })  
}