const router = require('express').Router();
const inboxController = require('../../controllers/inboxController')

//From the example, the controllers contain the main functionality
//and these routers just point to those functions

router.route('/')
    .post(inboxController.create);

router.route('/')
    .get(inboxController.read);

router.route('/')
    .put(inboxController.update);

router.route('/')
    .delete(inboxController.delete);


    
module.exports = router;