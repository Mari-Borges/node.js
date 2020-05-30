const express = require('express');
const router = express.Router();
const Produto = require('../models/produtos');
const mongoose = require('mongoose');

router.get('/', (req, res, next) =>{
    res.status(200).json({
        message: 'GET Request para /produtos'
    });
});

router.post('/', (req, res, next) =>{

    const produto = new Produto({
            _id: new mongoose.Types.ObjetId(),
            nome: req.body.nome,
            preco: req.body.preco
    });
    produto.save()
    .then(result => {
         res.status(201).json({
             messagem: 'POST request par a /produto',
             produtoCriado: produto
      });
    })
    .cotch(err =>{
    res.status(500).json({
        erro: err
        });
    });
 router.get('/:produtoId', (req, res, next) =>{
    const id = req.params.produtosId;
    Produto.findById(id)
    .exec()
    .then(doc => {
           res.status(200).json(doc);

    })
    .catch(err=>{
        res.status(500).json({error:err});
    })
});
});

module.exports = router;