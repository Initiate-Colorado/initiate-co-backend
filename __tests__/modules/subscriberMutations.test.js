import request from 'supertest';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../../src/setup/schema';
import models from '../../src/setup/models';
describe("subscriber mutations", () => {
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
  it('subscriberSignup', async () => {
      const response = await request(server)
      .post('/')
      .send({ query: 'mutation {subscriberSignup( email: "harrypotter@initiateco.com") { email }}' })
      .expect(200)
      expect(response.body.data.subscriberSignup.email).toEqual("harrypotter@initiateco.com")
      models.Subscriber.destroy({ where: {email: response.body.data.subscriberSignup.email} })
  });
})
