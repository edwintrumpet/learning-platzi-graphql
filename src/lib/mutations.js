'use strict'

const connectDb = require('./db')
const {ObjectID} = require('mongodb')
const errorHandler = require('./errorHandler')

module.exports ={
    createCourse: async (_, { input }) => {
        let db, course
        const defaults = {
            teacher: '',
            topic: ''
        }
        const newCourse = {
            ...defaults,
            ...input
        }
        try {
            db = await connectDb()
            course = await db.collection('courses').insertOne(newCourse)
            newCourse._id = course.insertedId
        } catch(err) {
            errorHandler(err)
        }
        return newCourse
    },
    editCourse: async (_, { _id, input }) => {
        let db, course
        try {
            db = await connectDb()
            await db.collection('courses').updateOne(
                { _id: ObjectID(_id) },
                { $set: input }
            )
            course = await db.collection('courses').findOne(
                { _id: ObjectID(_id) }
            )
        } catch(err) {
            errorHandler(err)
        }
        return course
    },
    deleteCourse: async (_, { _id }) => {
        let course
        try {
            const db = await connectDb()
            course = await db.collection('courses').findOne({ _id: ObjectID(_id) })
            await db.collection('courses').deleteOne({ _id: ObjectID(_id) })
        } catch(err) {
            errorHandler(err)
        }
        return course
    },
    createPerson: async (_, { input }) => {
        let db, person
        try {
            db = await connectDb()
            person = await db.collection('students').insertOne(input)
            input._id = person.insertedId
        } catch(err) {
            errorHandler(err)
        }
        return input
    },
    editPerson: async (_, { _id, input }) => {
        let db, person
        try {
            db = await connectDb()
            await db.collection('students').updateOne(
                { _id: ObjectID(_id) },
                { $set: input }
            )
            person = await db.collection('students').findOne(
                { _id: ObjectID(_id) }
            )
        } catch(err) {
            errorHandler(err)
        }
        return person
    },
    deletePerson: async (_, { _id }) => {
        let person
        try {
            const db = await connectDb()
            person = await db.collection('students').findOne({ _id: ObjectID(_id) })
            await db.collection('students').deleteOne({ _id: ObjectID(_id) })
        } catch(err) {
            errorHandler(err)
        }
        return person
    },
    addPeople: async (_, { courseId, personId }) => {
        let course
        try {
            const db = await connectDb()
            course = await db.collection('courses').findOne({ _id: ObjectID(courseId) })
            const person = await db.collection('students').findOne({ _id: ObjectID(personId) })
            if(!course || !person) throw new Error('La persona o el curso no existen')
            await db.collection('courses').updateOne(
                { _id: ObjectID(courseId) },
                { $addToSet: { people: ObjectID(personId) } }
            )
        } catch(err) {
            errorHandler(err)
        }
        return course
    }
}