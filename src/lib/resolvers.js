'use strict'

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
        getCourses: () => courses,
        getCourse: (_, args) => {
            const course = courses.filter(course => course._id === args.id)
            return course.pop()
        }
    }
}