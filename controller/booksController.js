
const ModelBooks = require('../model/booksModel');
// const { QueryTypes } = require('sequelize');

class BooksController{
    static find(req,res){
        ModelBooks.findAll().then(data =>{
            res.json(data)
        })
        .catch(err =>{

            res.json(err)
        })
    }
    static add(req,res){
        ModelBooks.create(req.body).then(data =>{
            res.json(data)
        })
        .catch(err =>{
            res.json(err)
        })
    }
    static update(req,res){
        ModelBooks.findAll({where:{id:req.body.id}}).then(data =>{
            ModelBooks.update(req.body,{where:{id:req.body.id}}).then(data =>{
                res.json(data)
            })
            .catch(err =>{
                res.json(err)
            })
        })
    }
}

module.exports = BooksController;