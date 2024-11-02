const express= require('express');
const cors= require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/test', (req, res) => {
    res.json({ message: 'ok'});
});

app.post('/register', (req, res) => {
    const { username, password }= req.body;
    res.json({ message: {username, password}});
    console.log(98);
});

app.listen(8000);