'use strict';

const config = require('../config/server.json');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ballots', [
      {
        title: 'The Admin',
        description: "give me 100k a year",
        subject: "This",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The User',
        description: "this awesome ballot",
        subject: "Everything",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1
      }
    ])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ballots', null, {});
  }
}
