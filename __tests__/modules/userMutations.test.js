// import request from 'supertest';
// import express from 'express';
// import graphqlHTTP from 'express-graphql';
// import schema from '../../src/setup/schema';
// import models from '../../src/setup/models';
//
// describe("User mutations", () => {
//   let server = express();
//   beforeAll(async () => {
//     server.use(
//       '/',
//       graphqlHTTP({
//         schema: schema,
//         graphiql: false
//       })
//     );
//
//     it('userSignup', async () => {
//       const response = await request(server)
//       .get('/')
//       .send({ mutation: 'mutation {userSignup( name: "User3", email: "user3@initiateco.com", password: "123456") {name, email}}' })
//       .expect(200)
//       expect(response.body.data.userSignup.name).toEqual("User3")
//       expect(response.body.data.userSignup.name).toEqual("user3@initiateco.com")
//     });
//   });
//     afterAll(() => {
//     server.close();
//   });
// })
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

  it('userSignup', async () => {
      const response = await request(server)
      .post('/')
      .send({ query: 'mutation {userSignup( name: "craig", email: "craig@initiateco.com", password: "123456") {name, email, id}}' })
      .expect(200)
      expect(response.body.data.userSignup.name).toEqual("craig")
      expect(response.body.data.userSignup.email).toEqual("craig@initiateco.com")
      models.User.destroy({ where: {id: response.body.data.userSignup.id} })
      // const response2 = await request(server)
      // .post('/')
      // .send({ query: `mutation {userRemove( id: ${response.body.data.userSignup.id})}` })
      // .expect(200)
    });
  // });
  afterAll(() => {
  server.close();
});
})
