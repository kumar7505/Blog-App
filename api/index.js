const express= require('express');
const cors= require('cors');
const mongoose = require('mongoose');
const User = require('./models/user.js');
const bcrypt = require('bcryptjs');

const salt = bcrypt.genSaltSync(10);
require('dotenv').config();
const app = express();

const MONGO_URL = process.env.MONGO_URL;

app.use(cors());
app.use(express.json());

mongoose.connect(MONGO_URL)
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch(err => console.error('MongoDB connection error:', err));


app.get('/test', (req, res) => {
    res.json({ message: 'ok' });
});

app.post('/register',async (req, res) => {
    const { username, password }= req.body;
        const userDoc = await User.create({
            username, 
            password: bcrypt.hashSync(password, salt)});
        res.json(userDoc);
});

app.listen(8000);