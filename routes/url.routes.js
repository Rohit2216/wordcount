const express = require("express")
const axios = require('axios');
const { WordCount } = require("../models/url.models")

const urlRoutes = express.Router()

urlRoutes.post('/wordcount', async (req, res) => {
    const { url } = req.body;
    try {
        const response = await axios.get(url);
        const wordCount = response.data.split(/\s+/).length;
        const wordCountData = new WordCount({ url: url, wordCount: wordCount });
        await wordCountData.save();
        res.json({ wordCount: wordCountData.wordCount, message: 'Word count added successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while counting words.' });
    }
});

// Read: Get all word count entries
urlRoutes.get('/wordcount', async (req, res) => {
    try {
        const wordCounts = await WordCount.find();
        res.json(wordCounts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching word counts.' });
    }
});

// Update: Update word count entry by ID
urlRoutes.put('/wordcount/:id', async (req, res) => {
    const { id } = req.params;
    const { url } = req.body;
    try {
        const response = await axios.get(url);
        const wordCount = response.data.split(/\s+/).length;
        const updatedWordCount = await WordCount.findByIdAndUpdate(id, { url: url, wordCount: wordCount }, { new: true });
        res.json(updatedWordCount);
    } catch (error) {
        console.error(error);
        if (error.code === 'ENOTFOUND') {
            // Handle specific ENOTFOUND error
            res.status(400).json({ error: 'Invalid URL or domain not found.' });
        } else {
            // Handle other errors
            res.status(500).json({ error: 'An error occurred while updating word count.' });
        }
    }
});

// Delete: Delete word count entry by ID
urlRoutes.delete('/wordcount/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await WordCount.findByIdAndDelete(id);
        res.json({ message: 'Word count deleted successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while deleting word count.' });
    }
});


module.exports = {
    urlRoutes
}
