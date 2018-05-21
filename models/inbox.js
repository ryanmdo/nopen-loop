const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inboxSchema = new Schema({


    body:{
        type: String,
        required: true,
    }
})


const Inbox = mongoose.model('Inbox', inboxSchema)

module.exports = Inbox;