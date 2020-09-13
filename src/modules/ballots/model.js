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
    userId: {
      type: DataTypes.INTEGER
    },
    corepresentative: {
      type: DataTypes.STRING
    },
    ballotNumber: {
      type: DataTypes.INTEGER
    },
    meetUpAddress: {
      type: DataTypes.STRING
    }
  })
  Ballot.associate = function(models) {
    Ballot.belongsTo(models.User, { foreignKey: 'userId'} )
  }

  return Ballot
}
