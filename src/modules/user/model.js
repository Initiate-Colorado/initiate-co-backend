'use strict'

// User
module.exports = function(sequelize, DataTypes) {
  let User = sequelize.define('users', {
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.TEXT
    },
    password: {
      type: DataTypes.TEXT
    },
    createdAt: {
      type: DataTypes.DATE
    },
    updatedAt: {
      type: DataTypes.DATE
    },
    thirty_days_from: {
      type: DataTypes.DATE
    },
    ballotTitle: {
      type: DataTypes.STRING
    },
    ballotDescription: {
      type: DataTypes.TEXT
    },
    meetUpAddress: {
      type: DataTypes.STRING
    }
  })

  return User
}
