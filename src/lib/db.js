'use strict'

const { MongoClient } = require('mongodb')
require('dotenv').config()

const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_NAME
} = process.env

const mongoUrl = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`
let connection

async function connectDB() {
    if(connection) return connection

    let client
    try {
        client = await MongoClient.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
        connection = client.db(DB_NAME)
    }catch(err){
        console.log('Could not connect to db', mongoUrl, err)
        process.exit(1)
    }
    return connection
}

module.exports = connectDB
