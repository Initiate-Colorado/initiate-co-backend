// Imports
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

// App Imports
import serverConfig from '../../config/server'
import models from '../../setup/models'

// Create
export async function create(parentValue, { name, email, password }) {
  // Users exists with same email check
  const user = await models.User.findOne({ where: { email } })

  if (!user) {
    // User does not exists
    const passwordHashed = await bcrypt.hash(password, serverConfig.saltRounds)

    return await models.User.create({
      name,
      email,
      password: passwordHashed
    })
  } else {
    // User exists
    throw new Error(`The email ${ email } is already registered. Please try to login.`)
  }
}

export async function login(parentValue, { email, password }) {
  const user = await models.User.findOne({ where: { email } })

  if (!user) {
    // User does not exists
    throw new Error(`We do not have any user registered with ${ email } email address. Please signup.`)
  } else {
    const userDetails = user.get()

    // User exists
    const passwordMatch = await bcrypt.compare(password, userDetails.password)

    if (!passwordMatch) {
      // Incorrect password
      throw new Error(`Sorry, the password you entered is incorrect. Please try again.`)
    } else {
      const userDetailsToken = {
        id: userDetails.id,
        name: userDetails.name,
        email: userDetails.email,
        thirty_days_from: userDetails.thirty_days_from,
        ballotTitle: userDetails.ballotTitle,
        ballotDescription: userDetails.ballotDescription,
      }

      return {
        user: userDetails,
        token: jwt.sign(userDetailsToken, serverConfig.secret)
      }
    }
  }
}
// Update User
export async function updateUserResolver(parentValue, { id, email, thirty_days_from, ballotTitle, ballotDescription, step, password }, { auth }) {
  if(auth.user && auth.user.id > 0) {
    await models.User.update(
      {
        id,
        email,
        thirty_days_from,
        ballotTitle,
        ballotDescription,
        step,
        password
      },
      { where: { id } }
    )
    return getById(parentValue, { id })
  } else {
    throw new Error('Operation denied.')
  }
}


// Get by ID
export async function getById(parentValue, { id }) {
  return await models.User.findOne({
    where: { id }
   })
}

// Delete
export async function remove(parentValue, { id }) {
  return await models.User.destroy({ where: { id } })
}
