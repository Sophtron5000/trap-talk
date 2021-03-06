const { Schema } = require('mongoose');
const userSchema = require('./User');

const conversationSchema = new Schema({
    date:{
        type: Date,
        default: Date.now()
    },
    text:{
        type: String,
    },
    user:{ type: String},
})

module.exports = conversationSchema;