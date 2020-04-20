'use strict'

const connectDb = require('./db')

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
            console.log(err)
        }
        return newCourse
    }
}