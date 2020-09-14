'use strict'

// User
module.exports = function(sequelize, DataTypes) {
  let Ballot = sequelize.define('ballots', {
    title: {
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
    representative: {
      type: DataTypes.STRING
    },
    representativeAddress: {
      type: DataTypes.STRING
    },
    corepresentative: {
      type: DataTypes.STRING
    },
    corepresentativeAddress: {
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
