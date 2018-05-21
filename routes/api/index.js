const router = require('express').Router();
const inboxRoutes = require('./inboxRoutes')



router.use('/inbox',inboxRoutes);



module.exports = router;