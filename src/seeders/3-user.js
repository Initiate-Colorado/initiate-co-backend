'use strict';

const bcrypt = require('bcrypt');
const config = require('../config/server.json');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        name: 'The Admin',
        email: 'admin@crate.com',
        password: bcrypt.hashSync('123456', config.saltRounds),
        thirty_days_from: new Date(),
        ballotTitle: "asdf",
        ballotDescription: "really cool stuff",
        createdAt: new Date(),
        updatedAt: new Date(),
        meetUpAddress: "123 3rd street"
      },
      {
        name: 'The User',
        email: 'user@crate.com',
        password: bcrypt.hashSync('123456', config.saltRounds),
        thirty_days_from: new Date(),
        ballotTitle: "asdf",
        ballotDescription: "really cool stuff",
        createdAt: new Date(),
        updatedAt: new Date(),
        meetUpAddress: "123 3rd street"
      }
    ])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
}
