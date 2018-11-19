const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const projectSchema = new Schema({

    utc_timestamp: {
        type: Date,
        default: Date.now,
        required: true,
    },

    title: {
        type:String,
        required:true,
    },

    goal_body: {
        type:String,
        required:true,
    },

    markdown_body: {
        type:String,
        required:true,
    },


});


const Project = mongoose.model('Project', projectSchema);
module.exports = Project;