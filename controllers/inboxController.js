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
    },//Another important comma


    delete: function(request, response) {

        console.log('DELETE /api/inbox --> inboxController.delete called')
        console.log('request.headers.id');
        console.log(request.headers.id);

        let id = request.headers.id;
        // console.log('request.headers.id:')
        // console.log(request.headers.idG);

        db.Inbox.deleteOne({
            "_id": id
            //no need to mess with objectid nonsense
        }).then(result => {
            console.log('inbox item removed:')
            console.log(result)
        }).catch(error => {
            console.error(error)
        })

    }

};