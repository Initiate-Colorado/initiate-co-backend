'use strict';

const config = require('../config/server.json');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ballots', [
      {
        type: 'User2Ballot',
        description: "frogs are destroying our childrens innocence",
        subject: "Frog abolotion",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2
      },
      {
        type: 'User1Ballot',
        description: "Much secret very observation",
        subject: "Birds eye view (Citizen observation project)",
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
