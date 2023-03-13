//CORE DEPENDENCIES
const express = require ('express');
const dotenv = require ('dotenv');
const mongoose = require ('mongoose');
const path = require ('path');

//OUR IMPORT MODULES
const connectDB = require('./database/mongo')
const addUser = require ('./routes/addUser');


dotenv.config({path: 'config.env'})

const app = express();
let PORT = process.env.PORT || 6001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//routing middleware
app.use('/', addUser)

//sets the view engine middleware
app.set ('view engine', 'ejs')


app.listen(PORT, ()=>{
    console.log('SERVER CONNECTED')
    connectDB();
});