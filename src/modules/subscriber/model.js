'use strict'

// User
module.exports = function(sequelize, DataTypes) {
  let Subscribers = sequelize.define('subscribers', {
    email: {
      type: DataTypes.TEXT
    },
    createdAt: {
      type: DataTypes.DATE
    },
    updatedAt: {
      type: DataTypes.DATE
    },
  })

  return Subscribers
}
