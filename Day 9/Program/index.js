const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
const routes = require('./routes/routes');

const app = express();

app.use(express.json());

app.use('/api', routes)

require('dotenv').config();

mongoose.connect('mongodb+srv://adityaagrawal:MongodbAtlas@rest-api.rg6z60q.mongodb.net/test', {useNewUrlParser: true});
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})