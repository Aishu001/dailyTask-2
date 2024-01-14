const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const Mentor = require('./models/Mentor')
const Student = require('./models/Student')

const app = express();

const PORT = 3000;

const DB_URL = 'mongodb+srv://sowandaryakrishnan:YOTNBpCP6pPpCVUU@cluster0.3qlrjhn.mongodb.net/'

mongoose
.connect(DB_URL , {})
.then(() => {
    console.log('Mongo db is connected');
})
.catch((error) => {
    console.log('could not connect mongodb' , error);
})



app.listen(PORT , () => {
    console.log("Server is running in" , PORT);
})
