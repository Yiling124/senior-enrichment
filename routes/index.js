var express = require('express');
var router = express.Router();
var campuses = require('./campuses');
var students = require('./students');

module.exports = {
    campuses: campuses,
    students: students
}

