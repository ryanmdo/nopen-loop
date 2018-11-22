const db = require('../models')


module.exports = {

    

    create: function(request, response) {
        console.log('POST /project/inbox --> projectController.create called');
    
        db.Project.create({
            
            title:request.headers.title,
            goal:request.headers.goal


            //The utc_timestamp is already created in the model
        })
            .then(dbResult => { 
                console.log(dbResult)
                response.json(dbResult)
            })
            .catch(error => {
                console.log(error)
                response.status(422).json(error)
            });
    
    },

    read: function(request, response) {
        console.log('GET /project/inbox --> projectController.read called');

        
    },

    update: function(request, response) {
        console.log('UPDATE /project/inbox --> projectController.update called');


    },

    delete: function(request, response) {
        console.log('DELETE /project/inbox --> projectController.delete called');


    }


}