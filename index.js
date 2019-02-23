const { GraphQLServer } = require('graphql-yoga')

const dinnerOptions = ['🍕', '🌭', '🍔', '🥗', '🍣']

const typeDefs = `
    type Query {
        whatsForDinner: String!
    }
`

const resolvers = {
    Query: {
        whatsForDinner: () => {
            const idx = Math.floor(Math.random() * dinnerOptions.length)
            const foodChoice = dinnerOptions[idx]
            return `Tonight, we're having a ${foodChoice}`
        }
    }
}

const opts = {
    port: 7777,
    endpoint: '/graphql'
}

const server = new GraphQLServer({ typeDefs, resolvers, opts })

server.start( () => {
    console.log(
        `😁 Server running at http://localhost:${opts.port}${opts.endpoint}`
    )
})