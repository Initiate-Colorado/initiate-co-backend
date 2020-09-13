'use strict'

// User
module.exports = function(sequelize, DataTypes) {
  let BallotProcess = sequelize.define('ballot_processes', {
    title: {
      type: DataTypes.TEXT
    },
    dueDate: {
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

  return BallotProcess
}
