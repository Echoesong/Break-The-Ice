const mongoose = require('mongoose')
const Schema = mongoose.Schema

const icebreakerSchema = new Schema({
    content: {
        type: String, 
        required: true
    },
    topic: {
        type: String,
        enum: ['Travel', 'Entertainment', 'Food', 'Misc' ]
    },
    answers:{
        // Eventually, this will reference another model of Answers. Currently putting a string to confirm it exists
        type: String
    },
    answerCount: {
        type: Number
    }


}, {
    timestamps: true
})




module.exports = mongoose.model('Icebreaker', icebreakerSchema)