const router = require('express').Router()
const books = require('./books')

router.use('/books', books)
router.use('/', (req, res) =>{
        res.send("Selamat datang di Library");
      });


module.exports = router