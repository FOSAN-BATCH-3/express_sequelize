const BookModel = require('../Model/bookModel.js')
const { QueryTypes } = require('sequelize');
const { Op } = require("sequelize");

class BookController{
    static find(req, res){

        BookModel.findAll().then(data =>{
            res.json(data)
        })
        .catch(err=>{
            res.json(err)
        })
    }
   
    static add(req,res){
        console.log(req.body)
        BookModel.create(req.body).then(data=>{
            res.json(data)
        }).catch(err=>{
            res.json(err)
        })
    }

    static del (req,res){
        let x = parseInt(req.params.id)
        console.log(req.params)
        BookModel.destroy({where:{id : req.params.id}}).then(data=>{
            res.json("Delete Sukses")
        }).catch(err=>{
            res.json(err)
        })
    }

    static update(req,res){
        console.log(req.params.id)
        BookModel.update(req.body,{where:{id :req.params.id},returning: true}).then(data=>{
            res.json(data)
        }).catch(err=>{
            res.json(err)
        })
    }

    static find2(req, res){
        console.log(req.params.id)
        let x = []
        let y = {id: req.params.id}
        let z = {published_year : req.params.published_year}
        let c = {title: req.params.title}
        let d = {author : req.params.author}

        

        if (y.id !== undefined){ x.push(y)}
        if (z.published_year !== undefined){x.push(z)}
        if (c.title !== undefined){x.push(c)}
        if (d.author !== undefined){x.push(d)}
        console.log(x)
        
        BookModel.findAll({where: {[Op.and]: x}}).then(data =>{
            res.json(data)
        })
        .catch(err=>{
            res.json(err)
        })
    }
}

module.exports = BookController;