// Imports
import Sequelize from 'sequelize'

// App Imports
import databaseConnection from './database'

const models = {
  User: databaseConnection.import('../modules/user/model'),
  Subscriber: databaseConnection.import('../modules/subscriber/model'),
  BallotProcess: databaseConnection.import('../modules/ballot_process/model'),
  Ballot: databaseConnection.import('../modules/ballots/model')
}

Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models)
  }
})

models.sequelize = databaseConnection
models.Sequelize = Sequelize

export default models
