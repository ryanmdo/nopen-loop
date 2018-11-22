const router = require('express').Router();
const inboxRoutes = require('./inboxRoutes');
const projectRoutes = require('./projectRoutes');


router.use('/inbox', inboxRoutes);
router.use('/project', projectRoutes);




module.exports = router;