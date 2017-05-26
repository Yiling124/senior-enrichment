var express = require('express');
var router = express.Router();
var models = require('../db/models');
var Promise = require('bluebird');
var Students = models.Students;
var Campuses = models.Campuses;
module.exports = router;


// GET - all students - $$
router.get('/', function (req, res, next) {
    Students.findAll({})
        .then(function (students) {
            res.send(students);
        })
        .catch(next);
});

//GET - student by id - $$
router.get('/:id', function (req, res, next) {
    Students.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(function (student) {
            res.send(student);
        })
        .catch(next);
})

// POST - new student
router.post('/', function (req, res, next) {
    console.log('come hereeeeeeeee')
    Students.create({
        where: {
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email
        }
    })
    .then(function (newstudent) {
        console.log('test One ')
        res.send(newstudent)
        // if (req.body.campus){
        //     console.log('test tWO')
        //     return Campuses.findOne({
        //     where: {
        //         name: req.body.campus
        //     }
        // })
        // .then(function(campus){
        //     if (campus){
        //         console.log('new sttttudenetttt', newstudent)
        //       return newstudent.setCampus(campus)
        //     }
        // })
        // .catch(next);
        // }
    })
});


//PUT - update info for one student
router.put('/:id', function (req, res, next) {
    Students.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(function (student) {
            if (student) {
                student.update(req.body)
                    .then(function (student) {
                        res.status(200).send(student)
                    })
            } else {
                res.status(404).send()
            }
        })
        .catch(next)


})

//DELETE - one student
router.delete('/:id', function (req, res, next) {
    Students.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(function (student) {
            if (student) {
                student.destroy({})
            }
        })
        .catch(next)
})
