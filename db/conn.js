const Sequelize = require('sequelize')
const conn = new Sequelize('postgres://localhost/acme_schools_db')

module.exports = conn;

