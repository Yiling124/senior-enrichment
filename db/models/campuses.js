'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


var Campuses = db.define('campuses', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    phone: {
        type: Sequelize.TEXT,
    },
    address: {
        type: Sequelize.STRING,
        unique: true
    },
    image: {
        type: Sequelize.TEXT,
    }
});


module.exports = Campuses;
