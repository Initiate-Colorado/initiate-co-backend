'use strict';

const bcrypt = require('bcrypt');
const config = require('../config/server.json');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        id: 1,
        name: 'User1',
        email: 'user1@initiateco.com',
        password: bcrypt.hashSync('123456', config.saltRounds),
        thirty_days_from: new Date(),
        ballotTitle: "Frog free america",
        ballotDescription: "The banning of frogs initiative",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: 'User2',
        email: 'user2@initiateco.com',
        password: bcrypt.hashSync('123456', config.saltRounds),
        thirty_days_from: new Date(),
        ballotTitle: "Putins american surveliance mission",
        ballotDescription: "Replace all cameras in birds",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
}
