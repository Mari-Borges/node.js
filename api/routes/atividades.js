const express = require('express');
const router = express.Router();
const Atividade = require('../models/atividades');
const mongoose = require('mongoose');

router.get('/', (req, res, next) =>{
    res.status(200).json({
        message: 'GET Request para /atividade'
    });
});

router.post('/', (req, res, next) =>{
    
    const atividade = new Atividade({
            _id: new mongoose.Types.AtvidadId(),
            nome: req.body.nome,
            descrição: req.body.desc
    });
    atividade.save()
    .then(result => {
         res.status(201).json({
             message: 'POST Request para /atividade',
             atividadeCriada: atividade
      });
    })
    .catch(err => {
         res.status(500).json ({
         error: err
        });
    });
 router.get('/:atvidadId', (req, res, next) =>{
    const id = req.params.atividadId;
    Atividade.findById(id)
    .exec()
    .then(doc => {
           res.status(200).json(doc);

    })
    .catch(err=> {
        res.status(500).json({error:err});
    })
});
});

module.exports = router;