var express = require('express');
var router = express.Router();
var models = require('../db/models');
var Promise = require('bluebird');
var Students = models.Students;
var Campuses = models.Campuses;
module.exports = router;



// GET - all campuses - $$
router.get('/', function (req, res, next) {
    Campuses.findAll({})
        .then(function (campuses) {
            res.status(200).send(campuses);
        })
        .catch(next);
});

//GET - campus by id - $$
router.get('/:id', function (req, res, next) {
    Campuses.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(function (campus) {
            res.status(200).send(campus);
        })
        .catch(next);
})

// POST - new campus
router.post('/add', function (req, res, next) {
    Campuses.create(req.body)
        .then(function (campus) {
            res.status(200).send(campus)
        })
        .catch(next)
})

// PUT - update info for one campus
router.put('/:id', function (req, res, next) {
    Campuses.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(function (campus) {
            if (campus) {
                campus.update(req.body)
                    .then(function (campus) {
                        res.status(200).send(campus)
                    })
            } else {
                res.status(404).send()
            }
        })
        .catch(next)
})

//DELETE - one campus
router.delete('/:id', function (req, res, next) {
    Campuses.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(function (campus) {
            if (campus) {
                campus.stauts(200).destroy({})
            }
        })
        .catch(next)
})
