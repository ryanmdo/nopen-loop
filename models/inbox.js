const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const inboxSchema = new Schema({


    utc_timestamp: {
        type: Date,
        default:Date.now,
        required:true
    },
    body:{
        type: String,
        required: true,
    }
})


const Inbox = mongoose.model('Inbox', inboxSchema);
module.exports = Inbox;