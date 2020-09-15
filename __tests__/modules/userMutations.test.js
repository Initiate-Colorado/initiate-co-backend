
import request from 'supertest';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../../src/setup/schema';
import models from '../../src/setup/models';
describe("User mutations", () => {
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

  it('userSignup', async () => {
      const response = await request(server)
      .post('/')
      .send({ query: 'mutation {userSignup( name: "craig", email: "craig@initiateco.com", password: "123456") {name, email, id}}' })
      .expect(200)
      expect(response.body.data.userSignup.name).toEqual("craig")
      expect(response.body.data.userSignup.email).toEqual("craig@initiateco.com")
      models.User.destroy({ where: {id: response.body.data.userSignup.id} })
  });

  it('userRemove', async () => {
  models.User.create({id: 5, name: "craig", email: "craig@initiateco.com", password: "1234"})
    const response = await request(server)
    .post('/')
    .send({ query: 'mutation { userRemove( id: 5) {name, email, id}} ' })
    .expect(200)
    expect(response.body.data.userRemove.id).toEqual(null)
    expect(response.body.data.userRemove.email).toEqual(null)
    expect(response.body.data.userRemove.name).toEqual(null)
  });

    // it('updateUser', async () => {
    //   const craig = models.User.create({id: 6, name: "craig1", email: "craig1@initiateco.com", password: "1234"})
    //     const response = await request(server)
    //     .post('/')
    //     .send({ query: `mutation { updateUser( id: ${craig.id}, email: 'craig2@initiateco.com', ballotTitle: 'Frogs suck', ballotDescription: 'self explainitory') {email, id, ballotTitle, ballotDescription}}` })
    //     .expect(200)
    //     console.log (response.body)
    //     // expect(response.body.data.updateUser.id).toEqual(5)
    //     // expect(response.body.data.updateUser.email).toEqual("craig2@initiateco.com")
    //     // expect(response.body.data.updateUser.ballotTitle).toEqual("Frogs suck")
    //     // expect(response.body.data.updateUser.ballotDescription).toEqual("self explainitory")
    //     models.User.destroy({ where: {id: craig.id} })
    // });
    afterAll(() => {
    server.close();
    });
})
