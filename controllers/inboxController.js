const db = require('../models');

//Because I ain't liking Date object
var { DateTime } = require('luxon');

module.exports = {
    create: function(request, response) {

        console.log('POST /api/inbox --> inboxController.create called')
        //The data should be in request.headers.body
        //console.log('request.headers.body: '+ request.headers.body)


        //Needs the timestamp, and all the other metadata

        let d = DateTime.local().setZone('America/Los_Angeles')
        
        db.Inbox.create({
            body:request.headers.body,
            // unix_timestamp: d
        })
            .then(dbModel => { 
                console.log(dbModel)
                response.json(dbModel)
            })
            .catch(error => {
                response.status(422).json(error)
            });


        

        //I must re-examine this whole structure with the controllers
        //and the models and whatnot.

        // console.log(db.Inbox.create())
        // db.Inbox
        //     .create(request.body)
        //     .then(dbModel => { 
        //         console.log(dbModel)
        //         response.json(dbModel)
        //     })
        //     .catch(err => response.status(422).json(err));
    }


};