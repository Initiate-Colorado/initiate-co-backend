import request from 'supertest'
import express from 'express'
import schema from '../../setup/schema'
import graphqlHTTP from 'express-graphql'

describe('ballot query', () => {
  let server;

  beforeAll(() => {
    server = express();

    server.use(
      "/",
      graphqlHTTP({
        schema: schema,
        graphiql: true
      })
    )
  })

  it("is true", () => {
    expect(true).toBe(true)
  })

  it("returns Ballot by id", async () => {
    const response = await request(server)
    .get('/')
    .send({
      query: `{ballot(id: 1){
        id
        type
        subject
        description
      }}`
    })
    .expect(200)
    // console.log(response.body.data.ballot)
    expect(response.body.data.ballot.type).toBe('The Admin')
  })

  it("returns all Ballots", async () => {
    const response = await request(server)
    .get('/')
    .send({
      query: `{ballots{
        id
        type
        subject
        description
      }}`
    })
    .expect(200)
    // console.log(response.body)
    expect(response.body.data.ballots[0].type).toBe('The Admin')
  })
})