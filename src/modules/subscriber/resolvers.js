// Imports


// App Imports
import serverConfig from '../../config/server'
import models from '../../setup/models'

// Create
export async function create(parentValue, { email }) {
  return await models.Subscriber.create({
    email
  })
}
// Delete
export async function remove(parentValue, { id }) {
  return await models.Subscribers.destroy({ where: { id } })
}
