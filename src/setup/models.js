// Imports
import Sequelize from 'sequelize'

// App Imports
import databaseConnection from './database'

const models = {
}

Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models)
  }
})

models.sequelize = databaseConnection
models.Sequelize = Sequelize

export default models
