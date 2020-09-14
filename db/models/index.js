'use strict'

const db = require('../index.js');
const Ballot = require('./ballot.model.js');
const User = require('./user.model.js');

Ballot.belongsTo(User);
User.hasMany(Ballot);

module.exports = {
  db,
  Ballot,
  User
};
