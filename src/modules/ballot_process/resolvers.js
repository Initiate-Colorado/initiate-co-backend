// Imports

//App Imports
import serverConfig from '../../config/server'
import models from '../../setup/models'

// Create
export async function create(parentValue, { title, dueDate, description}) {
  return await models.BallotProcess.create({
    title,
    dueDate,
    description,
  })
}

// couldn't get else to function property (team with FE to tlk about consoling or JS stuff)
// Update
export async function update(parentValue, { id, title, dueDate, description}) {
  if(models.BallotProcess.findOne({id: id})){
    await models.BallotProcess.update(
      {
        title,
        dueDate,
        description
      },
      {where: { id }}
    )
  return getById(parentValue, { id });
} else if(models.BallotProcess.findOne({id: id}) == undefined){
    throw new Error('No ID in database')
  }
}

// Get by ID
export async function getById(parentValue, { id }) {
  return await models.BallotProcess.findOne({
    where: { id }
  })
}
