const { ApolloServer } = require('apollo-server');
const { MongoClient } = require('mongodb');
const { readFileSync } = require('fs');

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

    const context = { db }

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context
    })

    server
    .listen()
    .then(({url}) => console.log(`GraphQL Service running on ${url}`))
}    

start()