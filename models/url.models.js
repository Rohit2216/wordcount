const mongoose = require('mongoose');

const wordCountSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    wordCount: {
        type: Number,
        required: true
    }
});

const WordCount = mongoose.model('WordCount', wordCountSchema);

module.exports = {WordCount};
