'use strict'

const connectDb = require('./db')
const {ObjectID} = require('mongodb')

module.exports = {
    Course: {
        people: async ({ people }) => {
            let peopleData
            try {
                const db = await connectDb()
                const ids = people ? people.map(id => ObjectID(id)) : []
                peopleData = ids.length > 0
                ? await db.collection('students').find(
                    { _id: { $in: ids } }
                ).toArray()
                : []
            } catch(err) {  
                console.log(err)
            }
            return peopleData
        }
    }
}