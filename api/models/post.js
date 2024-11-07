const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const PostSchema = Schema({
    title: String,
    summary: String, 
    aontent: String,
    cover: String,
}, {
    timestamps: true,
});

const PostModel = model('post', PostSchema);

module.exports = PostModel;