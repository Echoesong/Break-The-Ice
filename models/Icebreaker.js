const mongoose = require('mongoose')
const Schema = mongoose.Schema

const responseSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    submissionDate: {
        type: Date
    }
}, {
    timestamps: true
})

const icebreakerSchema = new Schema({
    content: {
        type: String, 
        required: true
    },
    topic: {
        type: String,
        enum: ['Travel', 'Entertainment', 'Food', 'Misc' ]
    },
    answers: [responseSchema],
    answerCount: {type: Number}
}, {
    timestamps: true
})

module.exports = mongoose.model('Icebreaker', icebreakerSchema)