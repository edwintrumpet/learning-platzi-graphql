'use strict'

const { graphql, buildSchema } = require('graphql')

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

// Ejecutar el query hello
graphql(schema, '{ hello }', resolvers).then(data => console.log(data))