'use strict';

const config = require('../config/server.json');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ballots', [
      {
<<<<<<< HEAD:src/seeders/14-ballots.js
        type: 'User2Ballot',
        description: "frogs are destroying our childrens innocence",
        subject: "Frog abolotion",
=======
        title: 'The Admin',
        description: "give me 100k a year",
        subject: "This",
>>>>>>> master:src/seeders/6-ballots.js
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2
      },
      {
<<<<<<< HEAD:src/seeders/14-ballots.js
        type: 'User1Ballot',
        description: "Much secret very observation",
        subject: "Birds eye view (Citizen observation project)",
=======
        title: 'The User',
        description: "this awesome ballot",
        subject: "Everything",
>>>>>>> master:src/seeders/6-ballots.js
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
