const fs = require('fs');

module.exports = {
  development: {
    username: 'dannyramos',
    password: null,
    database: 'initiateco',
    host: '127.0.0.1',
    dialect: 'postgresql',
    seederStorage: "sequelize"
  },
  production: {
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    port: process.env.PORT,
    dialect: 'postgresql',
  }
};
