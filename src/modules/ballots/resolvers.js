// Imports

//App Imports
import serverConfig from '../../config/server'
import models from '../../setup/models'

// Create
export async function create(parentValue, { type, description, subject }) {
  return await models.Ballot.create({
    type,
    description,
    subject
  })
}
// Update
export async function update(parentValue, { id ,type, description, subject}) {
  return await models.Ballot.update({
    type,
    description,
    subject
  }, {where: { id } } )
}
// Delete
export async function deleteBallot(parentValue, { id }) {
  return await models.Ballot.destroy({ where: { id }})
}

// Get by ID
export async function getById(parentValue, { id }) {
  return await models.Ballot.findOne({
    where: { id }
  })
}
