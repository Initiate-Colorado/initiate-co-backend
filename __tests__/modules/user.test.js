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

  it('User login', async () => {
    const response = await request(server)
    .get('/')
    .send({ query: 'query { userLogin(email: \"user1@initiateco.com\", password: \"123456\") { token, user {id, email } } } ' })
    .expect(200)
    expect(response.body.data.userLogin.token).toEqual(expect.anything())
    expect(response.body.data.userLogin.user.email).toEqual(  "user1@initiateco.com" )
  });
  afterAll(() => {
  server.close();
});
})
