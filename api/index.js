const express= require('express');
const cors= require('cors');
const mongoose = require('mongoose');
const User = require('./models/user.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const salt = bcrypt.genSaltSync(10);
const secret = '5yvhedsi8ejhrf5ejhbdrei7576edrft';
require('dotenv').config();
const app = express();

const REACT_PORT = process.env.REACT_PORT
const MONGO_URL = process.env.MONGO_URL;

app.use(cors({credentials: true, origin: `http://localhost:5173`}));
app.use(express.json());

mongoose.connect(MONGO_URL)
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch(err => console.error('MongoDB connection error:', err));

app.post('/register',async (req, res) => {
    const { username, password }= req.body;
    const userDoc = await User.create({
        username, 
        password: bcrypt.hashSync(password, salt)});
    res.json(userDoc);
});

app.post('/login', async (req, res) => {
    const { username, password }= req.body;
    const userDoc = await User.findOne({ username });
    const pass0k = bcrypt.compareSync(password, userDoc.password);
    console.log('kumar');
    if(pass0k){
        jwt.sign({username, id: userDoc._id}, secret, {}, (err, token) => {
            if(err) throw err;
            res.cookie('token', token).json('ok');
        })
    } else {
        res.status(400).json('Wrong Credintials');
    }
});

app.listen(8000);
