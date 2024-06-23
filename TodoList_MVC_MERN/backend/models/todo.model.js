const mongoose = require('mongoose')
const { Schema } = mongoose

const TodoSchema = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    completed: Boolean
})

module.exports = mongoose.model('todo', TodoSchema)