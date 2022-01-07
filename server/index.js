const { ApolloServer } = require('apollo-server')

const typeDefs = `
    type Todo {
        id: ID!
        title: String!
        complete: Boolean!
    }

    type Query {
        total: Int!
        all: [Todo!]!
    }

    type Mutation {
        newTodo(title: String!): Todo!
        changeTitle(id: ID!, title: String!): Todo
        changeComplete(id: ID!, complete: Boolean!): Todo
    }
`

var id = 0
var todos = []

const resolvers = {
    Query: {
        total: () => todos.length,
        all: () => todos
    },

    Mutation: {
        newTodo(parent, args) {
            var newtodo = {
                id: ++id,
                ...args,
                complete: false
            }
            todos.push(newtodo)
            return newtodo
        },

        changeTitle(parent, args) {
            const id = parseInt(args.id);
            const old = todos.find(x => x.id === id);
            if (old) {
                old.title = args.title;
                return old;
            }
        },

        changeComplete(parent, args) {
            const id = parseInt(args.id);
            const old = todos.find(x => x.id === id);
            if (old) {
                old.complete = args.complete;
                return old;
            }
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server
    .listen()
    .then(({url}) => console.log(`GraphQL Service running on ${url}`))