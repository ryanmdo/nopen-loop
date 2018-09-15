const db = require('../models');

module.exports = {
    create: function(request, response) {

        console.log('POST /api/inbox --> inboxController.create called')
        console.log(request)
       // console.log('request.headers.body: ' + request.headers.body)


        //I must re-examine this whole structure with the controllers
        //and the models and whatnot.

        // console.log(db.Inbox.create())
        // db.Inbox
        //     .create(request.body)
        //     .then(dbModel => { 
        //         console.log(dbModel)
        //         response.json(dbModel)
        //     })
        //     .catch(err => response.status(422).json(err))

    }


};