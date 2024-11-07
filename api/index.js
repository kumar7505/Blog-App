const express= require('express');
const cors= require('cors');
const mongoose = require('mongoose');
const User = require('./models/user.js');
const Post = require('./models/post.js')
const bcrypt = require('bcryptjs');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const fs = require('fs-extra');

const path = require('path');

const salt = bcrypt.genSaltSync(10);
const secret = '5yvhedsi8ejhrf5ejhbdrei7576edrft';
require('dotenv').config();
const app = express();
const uploadMiddleWare = multer({ dest: './uploads/' });

const REACT_PORT = process.env.REACT_PORT
const MONGO_URL = process.env.MONGO_URL;

app.use(cors({credentials: true, origin: `http://localhost:5173`}));
app.use(express.json());
console.log("Setting up cookie parser...");
app.use(cookieParser());
console.log("Cookie parser is set up.");

mongoose.connect(MONGO_URL)
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch(err => console.error('MongoDB connection error:', err));

app.post('/register',async (req, res) => {
    console.log('karthi');
    const { username, password }= req.body;
    const userDoc = await User.create({
        username, 
        password: bcrypt.hashSync(password, salt)});
    res.json(userDoc);
});

app.post('/login', async (req, res) => {
    const { username, password }= req.body;
    const userDoc = await User.findOne({ username });
    const pass0k = userDoc && bcrypt.compareSync(password, userDoc.password);
    if(pass0k){
        jwt.sign({username, id: userDoc._id}, secret, {}, (err, token) => {
            if(err) throw err;
            res.cookie('token', token, {httpOnly: true}).json({
                id:userDoc._id,
                username,
            });
        })
    } else {
        res.status(400).json('Wrong Credintials');
    }
    console.log("OK");
});

// app.get('/profile', (req, res) => {
//     const {token} = req.cookies;
//     console.log(98);
//     jwt.verify(token, secret, {}, (err, info) => {
//         if(err) throw err;
//         res.json(info);
//         console.log(res.username);
//     })
// });

app.get('/profile', (req, res) => {
    console.log(98);
    const { token } = req.cookies;
    if (!token) {
        return res.status(401).json({ error: 'Token is required' });
    }
    jwt.verify(token, secret, {}, (err, info) => {
        if (err) {
            return res.status(401).json({ error: 'Invalid token' });
        }
        res.json(info);
        console.log(info.username);
    });
});

app.post('/logout', (req, res) => {
    console.log('kumar');
    res.cookie('token', '').json({files: req.file});
})

app.post('/post', uploadMiddleWare.single('file'), async (req, res) => {
    const {originalname} = req.file;
    console.log(originalname);

    const parts = originalname.split('.');
    const ext = parts[parts.length - 1];
    const newPath = path+'.'+ext;
    fs.removeSync(req.file.path, newPath);
    
    
    const {title, summary, content} = req.body;
    if (!title || !summary || !content) {
        console.log({ error: 'Title, summary, and content are required.' });
    }
    console.log(content);
    const postDoc = await Post.create({
        title, summary, content,
        cover:newPath,
    });

    res.json(postDoc);
});

app.listen(8000);
