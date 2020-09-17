// Imports

//App Imports
import serverConfig from '../../config/server'
import models from '../../setup/models'
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// Create
export async function create(parentValue, { title, description, subject, userId, representative, representativeAddress, corepresentativeAddress, corepresentative, ballotNumber }) {
  return await models.Ballot.create({
    title,
    description,
    subject,
    userId,
    representative,
    representativeAddress,
    corepresentative,
    corepresentativeAddress,
    ballotNumber
  })
}
// Update
export async function update(parentValue, { id ,title, description, subject, corepresentative, ballotNumber, meetUpAddress}) {
  return await models.Ballot.update({
    title,
    description,
    subject,
    representative,
    representativeAddress,
    corepresentative,
    corepresentativeAddress,
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

// Get all proposed ballots
export async function getAllProposedBallots(){
  return await models.Ballot.findAll({
    where: {
      userId: {
        [Op.ne]: null
      }
    },
    include: [
    { model: models.User}]
  })
}
