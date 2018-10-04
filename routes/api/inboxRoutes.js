const router = require('express').Router();



const inboxController = require('../../controllers/inboxController')

//From the example, the controllers contain the main functionality
//and these routers just point to those functions

router.route('/')
    .get(inboxController.read)

router.route('/')
    .post(inboxController.create)

// const booksController = require("../../controllers/booksController");

// // Matches with "/api/books"
// router.route("/")
//   .get(booksController.findAll)
//   .post(booksController.create);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;