import { GraphQLServer } from 'graphql-yoga';
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
    //typeDefs: "./graphql/schema.graphql",
    typeDefs: "./graphql/schema.api.graphql",
    resolvers : resolvers
});

server.start( () => console.log("Graphql Server Running!!"));