const mongoose = require('mongoose')

const NoteSchema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    note : {
        type : String,
        required : true
    },
    dateCreated : {
        type : Date,
        default : Date.now()
    }
})

module.exports = mongoose.model('Note', NoteSchema)