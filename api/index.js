const express= require('express');
const cors= require('cors');
const mongoose = require('mongoose');
const User = require('/models/user');

require('dotenv').config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connnect(process.env.mongo_url);

app.get('/test', (req, res) => {
    res.json({ message: 'ok'});
});

app.post('/register',async (req, res) => {
    const { username, password }= req.body;
    const userDoc = await User.create({username, password});
    res.json(userDoc);
    console.log(98);
});

app.listen(8000);