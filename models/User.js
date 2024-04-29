const sequelize = require('sequelize');
const db = require('../config/database');

const User = db.define('user', {
    nama: {
        type: sequelize.STRING,
        allowNull: false
    },
    no_telp: {
        type: sequelize.STRING,
        allowNull: false
    },
    alamat: {
        type: sequelize.STRING,
        allowNull: false
    }
})

module.exports = User;

