import { Neo4jGraphQL } from '@neo4j/graphql';
import { ApolloServer } from 'apollo-server';
import { driver } from './config/neo4j';

const typeDefs = `
  type Router {
    id: ID!
    hostname: String!
    ipAddress: String!
    model: String!
  }

  type Switch {
    id: ID!
    hostname: String!
    ipAddress: String!
    model: String!
  }

  type Firewall {
    id: ID!
    hostname: String!
    ipAddress: String!
    model: String!
  }

  type LoadBalancer {
    id: ID!
    hostname: String!
    ipAddress: String!
    model: String!
  }

  type Server {
    id: ID!
    hostname: String!
    ipAddress: String!
    loadBalancerId: ID!
  }

  type Query {
    routers: [Router]
    switches: [Switch]
    firewalls: [Firewall]
    loadBalancers: [LoadBalancer]
    servers: [Server]
  }
`;

const neo4jGraphQL = new Neo4jGraphQL({ typeDefs, driver });

const server = new ApolloServer({
  schema: neo4jGraphQL.schema,
});

const PORT = process.env.PORT || 4000;

server.listen(PORT).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});