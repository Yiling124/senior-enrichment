'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')

var Students = db.define('students', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: Sequelize.TEXT,
        unique: true
    },
    email: {
        type: Sequelize.STRING,
        validate: {
          isEmail: true
        },
        unique: true
    }

});


module.exports = Students;
