const router = require('express').Router()
const controller = require('../controller/booksController')

router.get('/', controller.find)
router.post('/', controller.add)
router.put('/:id', controller.update)

module.exports = router