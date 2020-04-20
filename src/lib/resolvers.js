'use strict'

const connectDb = require('./db')
const {ObjectID} = require('mongodb')

const courses = [
    {
        _id: '1',
        title: 'Curso básico de GraphQL',
        teacher: 'Adrián Estrada',
        description: 'Curso de introducción a GraphQL de Platzi',
        topic: 'backend'
    },
    {
        _id: '2',
        title: 'Curso de API REST',
        teacher: 'Mauro Chojrin',
        description: 'Curso de introducción a API REST de Platzi',
        topic: 'backend'
    },
    {
        _id: '3',
        title: 'Curso de Postman', 
        teacher: 'Eduardo Álvarez',
        description: 'Manejo avanzado de Postman',
        topic: 'tools'
    },
]

module.exports = {
    Query: {
        getCourses: async () => {
            let db
            let courses = []
            try {
                db = await connectDb()
                courses = await db.collection('courses').find().toArray()
            } catch(err) {
                console.log(error)
            }
            return courses
        },
        getCourse: async (_, { id }) => {
            let db
            let course
            try {
                db = await connectDb()
                course = await db.collection('courses').findOne({ _id: ObjectID(id) })
            } catch(err) {
                console.log(error)
            }
            return course
        }
    }
}