// Imports
import { Sequelize } from 'sequelize'

// App Imports
import { NODE_ENV, ENV } from '../config/env'

// Load database config


// Create new database connection
const connection = new Sequelize(ENV.DATABASE, ENV.USERNAME, ENV.PASSWORD, {
  host: ENV.HOST,
  dialect: "postgres",
  logging: false,
  seederStorage: "sequelize"
})

// Test connection
// console.info('SETUP - Connecting database...')
//
connection
  .authenticate()
  .then(() => {
    console.info('INFO - Database connected.')
  })
  .catch(err => {
    console.error('ERROR - Unable to connect to the database:', err)
  })

export default connection
