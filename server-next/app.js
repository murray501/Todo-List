'use strict'
const { ApolloServer } = require('apollo-server-express')
const { MongoClient } = require('mongodb')
const { readFileSync } = require('fs') 
const express = require('express')
const app = express();
const expressPlayground = require(`graphql-playground-middleware-express`).default

const resolvers = require('./resolvers');
require('dotenv').config()
const typeDefs = readFileSync('./typeDefs.graphql', 'UTF-8');

async function start() {
    const MONGO_DB = process.env.DB_HOST
    let db

    try {
        const client = await MongoClient.connect(MONGO_DB, { useNewUrlParser: true})
        db = client.db()
    } catch (error) {
        console.log(`
            MONGO DB HOST not found!
            add DB_HOST env varible to .env file
            exiting...
        `)
        process.exit(1)
    }

    const context = { db };
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context
    })

    await server.start();

    server.applyMiddleware({ app })

    app.get('/playground', expressPlayground({ endpoint: '/graphql'}))

    app
    .listen({ port: 4000 }, () =>
        console.log(`GraphQL Server running at http://localhost:4000${server.graphqlPath}`) 
    )
}    

start()

const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
nextApp.prepare().then(
    () => app.get('*',   nextApp.getRequestHandler()),
    err => {
        console.error(err)
        process.exit(1)
    }
)