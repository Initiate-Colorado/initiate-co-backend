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
