const express = require('express')
const port = 3000
const app = express()
const routing = require('./routing')
const db = require('./config/connection')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/', routing)

// app.get("/", function(req, res) {
//     res.send("FOSAN ACADEMY, hey welcome :) ");
//   });

// app.get('/books', (req,res) =>{
//     res.send('Ini adalah daftar dari buku buku yan ada');
// });

// app.get('/borrow', (req,res) =>{
//     res.send('Ini dalah form untuk menginput data buku dan peminjam')
// })

app.listen(port, () => {
    console.log(`Connected to localhost:${port}`);
    db.authenticate()
    .then(()=>{
        console.log(`database...OK!`);
    })
    .catch((err)=>{
        console.log('Error: ' + err);
    })
});