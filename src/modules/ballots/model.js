'use strict'

// User
module.exports = function(sequelize, DataTypes) {
  let Ballot = sequelize.define('ballots', {
    type: {
      type: DataTypes.STRING
    },
    subject: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    },
    createdAt: {
      type: DataTypes.DATE
    },
    updatedAt: {
      type: DataTypes.DATE
    },
  })

  return Ballot
}
