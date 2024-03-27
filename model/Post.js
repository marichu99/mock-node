const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    _id: Number,
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    userId: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Post', PostSchema)