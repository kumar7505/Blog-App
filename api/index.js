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

react_app_PORT_number = 5173;

const salt = bcrypt.genSaltSync(10);
const secret = process.env.SECRET;
require('dotenv').config();
const app = express();
const uploadMiddleWare = multer({ dest: './uploads/' });

const REACT_PORT = process.env.REACT_PORT
const MONGO_URL = process.env.MONGO_URL;

app.use(cors({credentials: true, origin: `http://localhost:${react_app_PORT_number}`}));
app.use(express.json());
console.log("Setting up cookie parser...");
app.use(cookieParser());
console.log("Cookie parser is set up.");
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

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
    res.cookie('token', '').json({files: req.file});
})

app.post('/post', uploadMiddleWare.single('file'), async (req, res) => {
    const {originalname} = req.file;
    console.log(originalname);

    const parts = originalname.split('.');
    const ext = parts[parts.length - 1];
    const newPath = path.join('uploads', `${Date.now()}.${ext}`);
    console.log(path.join(__dirname, newPath));
    fs.moveSync(req.file.path, path.join(__dirname, newPath));
    
    const {title, summary, content} = req.body;
    if (!title || !summary || !content) {
        console.log({ error: 'Title, summary, and content are required.' });
    }

    const { token } = req.cookies;
    jwt.verify(token, secret, {}, async (err, info) => {
        if (err) {
            return res.status(401).json({ error: 'Invalid token' });
        }
        const postDoc = await Post.create({
            title, 
            summary, 
            content,
            cover:newPath,
            author: info.id,
        });
        res.json(info);
    });

    console.log(content);
});

app.put('/post', uploadMiddleWare.single('file'), async (req, res) => {
    let newPath = '';
    if(req.file){
        const {originalname} = req.file;

        const parts = originalname.split('.');
        const ext = parts[parts.length - 1];
        newPath = path.join('uploads', `${Date.now()}.${ext}`);
        fs.moveSync(req.file.path, path.join(__dirname, newPath));
    }
    const {token} = req.cookies;
    jwt.verify(token, secret, {}, async (err, info) => {
        if (err) throw err;
        const {id,title,summary,content} = req.body;
        const postDoc = await Post.findById(id);
        const isAuthor = JSON.stringify(postDoc.author) === JSON.stringify(info.id);
        
        // ({
        //     title, 
        //     summary, 
        //     content,
        //     cover:newPath,
        //     author: info.id,
        // });
        if(!isAuthor){
            return res.status(400).json('');
        }

        // await postDoc.update({
        //     title, 
        //     summary,
        //     content,
        //     cover: 
        //         newPath ? newPath : postDoc.cover,
        // });
        
        postDoc.title = title;
        postDoc.summary = summary;
        postDoc.content = content;
        postDoc.cover = newPath ? newPath : postDoc.cover;

        await postDoc.save();  // Save the updated document

        res.json(info);
    });
})

app.get('/post', uploadMiddleWare.single('file'), async (req, res) => {
    res.json(await Post.find()
    .populate('author', ['username'])
.sort({createdAt: -1})
.limit(20));
});

// to display blog
app.get('/post/:id', async(req, res) => {
    const {id} = req.params;
    const postDoc = await Post.findById(id).populate('author', ['username']);
    res.json(postDoc);
})

app.listen(8000);
