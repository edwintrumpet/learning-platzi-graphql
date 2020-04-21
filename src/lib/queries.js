'use strict'

const connectDb = require('./db')
const {ObjectID} = require('mongodb')
const errorHandler = require('./errorHandler')

module.exports ={
    getCourses: async () => {
        let db
        let courses = []
        try {
            db = await connectDb()
            courses = await db.collection('courses').find().toArray()
        } catch(err) {
            errorHandler(err)
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
            errorHandler(err)
        }
        return course
    },
    getPeople: async () => {
        let db
        let people = []
        try {
            db = await connectDb()
            people = await db.collection('students').find().toArray()
        } catch(err) {
            errorHandler(err)
        }
        return people
    },
    getPerson: async (_, { id }) => {
        let db
        let person
        try {
            db = await connectDb()
            person = await db.collection('students').findOne({ _id: ObjectID(id) })
        } catch(err) {
            errorHandler(err)
        }
        return person
    }
}