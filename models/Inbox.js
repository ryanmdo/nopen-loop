var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var inboxSchema = new Schema({

    body:{
        type: String,
        required: true,
    },
    utc_timestamp:{
        type: Date,
        required: true,
    }


});



module.exports = mongoose.model('Inbox',inboxSchema);