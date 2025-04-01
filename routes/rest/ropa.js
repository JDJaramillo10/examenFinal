var express = require('express');
var router = express.Router();

const { Sequelize, Op } = require('sequelize');
const Colores = require('../../models').colores;
const Ropa = require('../../models').ropa; 

router.get('/findAll/view', function(req, res, next) {

    Ropa.findAll({
        attributes: { exclude: ["updatedAt", "createdAt"] },
        include: [{
            model: Colores,
            attributes: ['nombre'],
            through: {attributes: []}
        }],
    })
    .then(ropa => {
        res.render('ropa', { title: 'Ropa', arrRopa: ropa});
    })
    .catch(error => res.status(400).send(error))
    
});

router.get('/findAllbyId/:id/view', function(req, res, next) {
    let id = parseInt(req.params.id);

    Ropa.findAll({
        attributes: { exclude: ["updatedAt", , "createdAt"]} ,
        include: [{
            model: Colores,
            attributes: ['nombre'],
            through: {attributes: []}
        }],
        where: {
            [Op.and]: [
                {id: id}
            ]
        }
    })
    .then(ropa => {
        res.render('ropa', { title: 'Ropa', arrRopa: ropa});
    })
    .catch(error =>
    res.status(400).send(error))
    
});

router.get('/findAllbyId/view', function(req, res, next) {
    let id = parseInt(req.query.ID);

    Ropa.findAll({
        attributes: { exclude: ["updatedAt", , "createdAt"]} ,
        include: [{
            model: Colores,
            attributes: ['nombre'],
            through: {attributes: []}
        }],
        where: {
            [Op.and]: [
                {id: id}
            ]
        }
    })
    .then(ropa => {
        res.render('ropa', { title: 'Ropa', arrRopa: ropa});
    })
    .catch(error =>
    res.status(400).send(error))
    
});

router.get('/findAllByRate/view', function(req,res,next) {

    let lower = parseFloat(req.query.lower);
    let higher = parseFloat(req.query.higher);

    Ropa.findAll({
        attributes: { exclude: ["updatedAt", , "createdAt"]} ,
        include: [{
            model: Colores,
            attributes: ['nombre'],
            through: {attributes: []}
        }],
        where: {
            precio: {
                [Op.between]: [lower, higher]
            }
        }
    })
    .then(ropa => {
        res.render('ropaRango', { title: 'Ropa por Rango', arrRopa: ropa});
    })
    .catch(error =>
    res.status(400).send(error))
});

module.exports = router;