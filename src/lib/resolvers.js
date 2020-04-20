'use strict'

const courses = [
    {
        _id: 'anyid',
        title: 'Curso básico de GraphQL',
        teacher: 'Adrián Estrada',
        description: 'Curso de introducción a GraphQL de Platzi',
        topic: 'backend'
    },
    {
        _id: 'anyid',
        title: 'Curso de API REST',
        teacher: 'Mauro Chojrin',
        description: 'Curso de introducción a API REST de Platzi',
        topic: 'backend'
    },
    {
        _id: 'anyid',
        title: 'Curso de Postman', 
        teacher: 'Eduardo Álvarez',
        description: 'Manejo avanzado de Postman',
        topic: 'tools'
    },
]

module.exports = {
    getCourses: () => courses
}