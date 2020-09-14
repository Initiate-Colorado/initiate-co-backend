const Sequelize = require('sequelize');
const db = require('../index.js');

const Ballot = db.define('ballot', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  type: {
    allowNull: false,
    type: Sequelize.STRING
  },
  subject: {
    allowNull: false,
    type: Sequelize.STRING
  },
  description: {
    allowNull: false,
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
  userId: {
    type: Sequelize.INTEGER,
    references: {
      model: 'users',
      key: 'id'
    },
    allowNull: true
  },
  representative: {
    type: Sequelize.STRING,
    allowNull: true
  },
  representativeAddress: {
    type: Sequelize.STRING,
    allowNull: true
  },
  corepresentative: {
    type: Sequelize.STRING,
    allowNull: true
  },
  corepresentativeAddress: {
    type: Sequelize.STRING,
    allowNull: true
  },
  ballotNumber: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  meetUpAddress: {
    allowNull: true,
    type: Sequelize.STRING
  }
})

module.exports = Ballot
