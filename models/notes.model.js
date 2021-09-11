const joi = require('joi')

const NoteSchema = joi.object({
    title : joi.string().required(),
    note : joi.string().required(),
    dataAdded : joi.string().default(new Date().toISOString() )
})

module.exports = NoteSchema
