// Imports

//App Imports
import serverConfig from '../../config/server'
import models from '../../setup/models'

// Create
export async function create(parentValue, { type, description, subject, userId, corepresentative, ballotNumber }) {
  return await models.Ballot.create({
    type,
    description,
    subject,
    userId,
    corepresentative,
    ballotNumber
  })
}
// Update
export async function update(parentValue, { id ,type, description, subject, corepresentative, ballotNumber, meetUpAddress}) {
  return await models.Ballot.update({
    type,
    description,
    subject,
    corepresentative,
    ballotNumber,
    meetUpAddress
  }, {where: { id } } )
}
// Delete
export async function deleteBallot(parentValue, { id }) {
  return await models.Ballot.destroy({ where: { id }})
}

// Get by ID
export async function getById(parentValue, { id }) {
  return await models.Ballot.findOne({
    where: { id },
    include: [
    { model: models.User},
  ]
  })
}

// Get All
export async function getAll(){
  return await models.Ballot.findAll({
    include: [
    { model: models.User},
  ]
})
}
