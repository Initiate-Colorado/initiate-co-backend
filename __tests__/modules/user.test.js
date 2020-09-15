import request from 'supertest';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../../src/setup/schema';
import models from '../../src/setup/models';
describe("User queries", () => {
  let token = ""
  let server = express();
  beforeAll(async () => {
    server.use(
      '/',
      graphqlHTTP({
        schema: schema,
        graphiql: false
      })
    );
  });


  it('Gets user by ID', async () => {
    const response = await request(server)
    .get('/')
    .send({ query: 'query { user(id: 5) { name } }' })
    .expect(200)
    expect(response.body.data.user).toEqual({ name: "User1" })
  });

  afterAll(() => {
  server.close();
});
})
