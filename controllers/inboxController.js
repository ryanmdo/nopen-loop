const db = require('../models');

//Because I ain't liking Date object
//And I still don't use it.

module.exports = {

    //CRUD-Create POST
    create: function(request, response) {

        console.log('POST /api/inbox --> inboxController.create called')
        //The data should be in request.headers.body
        //console.log('request.headers.body: '+ request.headers.body)
        
        db.Inbox.create({
            body:request.headers.body,
            //The utc_timestamp is already created in the model
        })
            .then(dbResult => { 
                console.log(dbResult)
                response.json(dbResult)
            })
            .catch(error => {
                response.status(422).json(error)
            });

    },//important comma


    //CRUD-Read GET
    read: function(request, response) {

        console.log('GET /api/inbox --> inboxController.read called')

        db.Inbox.find(
            function(error, results){
                if(error){
                    console.error(error)
                } else{

                response.json(results)
                }
            }
        )
    }

};