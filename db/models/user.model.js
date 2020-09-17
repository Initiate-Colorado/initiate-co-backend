const Sequelize = require('sequelize');
const db = require('../index.js');

const User = db.define('user', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.TEXT
  },
  password: {
    type: Sequelize.TEXT
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  thirty_days_from: {
    allowNull: true,
    type: Sequelize.DATE
  },
  ballotTitle: {
    allowNull: true,
    type: Sequelize.STRING
  },
  ballotDescription: {
    allowNull: true,
    type: Sequelize.TEXT
  },
  step: {
    allowNull: true,
    type: Sequelize.INTEGER
  }
})

module.exports = User
