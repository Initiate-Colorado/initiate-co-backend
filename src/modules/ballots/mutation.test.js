import request from 'supertest'
import express from 'express'
import schema from '../../setup/schema'
import graphqlHTTP from 'express-graphql'
import db from '../../setup/database';
import models from '../../setup/models'

describe('ballot query', () => {
  let server;

  beforeAll(() => {
    server = express();

    server.use(
      "/",
      graphqlHTTP({
        schema: schema,
        graphiql: false
      })
    )
  })

  beforeEach(async () => {
    const ballot1 = {
      id: 1,
      title: 'The Admin',
      description: "give me 100k a year",
      subject: "This",
      createdAt: new Date(),
      updatedAt: new Date()
    };
    const ballot2 = {
      id: 2,
      title: 'The User',
      description: "this awesome ballot",
      subject: "Everything",
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    await models.Ballot.create(ballot1);
    await models.Ballot.create(ballot2);
  })

  afterEach(async () => {
    await models.Ballot.destroy({ where: {} })
  })

  afterAll(() => {
    db.close()
  })
})