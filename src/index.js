'use strict'

const express = require('express')
const gqlMiddleware = require('express-graphql')
const { graphql, buildSchema } = require('graphql')

const app = express()
const port = process.env.PORT || 3000

// Definiendo el esquema
const schema = buildSchema(`
    type Query {
        hello: String,

    }
`)

// Configurar los resolvers
const resolvers = {
    hello: () => 'Hola mundo'
}


app.use('/api', gqlMiddleware({
    schema,
    rootValue: resolvers,
    graphiql: true
}))

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}/api`)
})