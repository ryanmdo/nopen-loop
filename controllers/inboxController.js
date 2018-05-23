const db = require('../models');

module.exports = {
    create: function(request, response) {

        console.log('PUT /api/inbox --> inboxController.create called')
        db.Inbox
            .create(request.body)
            .then(dbModel => res.json(dbModel))
            .catch(error => response.status(422).json(error))

    }


};