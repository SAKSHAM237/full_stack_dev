const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

const PORT = 3000;

// Home route
app.get(['/', '/home'], (req, res) => {
    fs.readFile(path.join(__dirname, 'home.html'), 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error loading Home page');
        }
        res.send(data);
    });
});

// About route
app.get('/about', (req, res) => {
    fs.readFile(path.join(__dirname, 'about.html'), 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error loading About page');
        }
        res.send(data);
    });
});

// Contact route
app.get('/contact', (req, res) => {
    fs.readFile(path.join(__dirname, 'contact.html'), 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error loading Contact page');
        }
        res.send(data);
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});