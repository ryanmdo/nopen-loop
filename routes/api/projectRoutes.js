const router = require('express').Router();
const projectController = require('../../controllers/projectController')


//This simply routes the REST calls so that the controller can do its job


router.route('/')
    .post(projectController.create);

router.route('/')
    .get(projectController.read);

router.route('/')
    .put(projectController.update);

router.route('/')
    .delete(projectController.delete);



module.exports = router;