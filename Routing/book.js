const router = require('express').Router()
const controller = require('../Controller/bookController.js')


router.get('/books', controller.find)
router.post('/books', controller.add)
router.put('/books/:id', controller.update)
router.get('/books/search?',controller.find2)
router.delete('/books/:id',controller.del)

module.exports = router;

