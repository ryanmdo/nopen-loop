const db = require('../models')


module.exports = {

    

    create: function(request, response) {
        console.log('POST /project/inbox --> projectController.create called');
        
        console.log('request.body.body:')
        console.log(request.body.body)
        // console.log('POSTFORMATTED BODY.BODY TEXT:')
        // console.log(bodyBR)


        db.Project.create({
            

            title:request.body.title,
            goal:request.body.goal,
            body:request.body.body

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

        db.Project.find(
            function(error, results){
                if(error){
                    console.error(error)
                } else{

                    console.log(results)
                response.json(results)
                }
            }
        )
    },

    update: function(request, response) {
        console.log('UPDATE /project/inbox --> projectController.update called');


    },

    delete: function(request, response) {
        console.log('DELETE /project/inbox --> projectController.delete called');


    }


}

