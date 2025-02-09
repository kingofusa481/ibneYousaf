const express = require('express');
const ejs = require('ejs');

const app = express();
const port = 3000;

// Uncomment the following line to enable EJS
app.set('view engine', "ejs");

// Middleware for parsing JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic route
app.get('/', (req, res) => {
    res.render('books');
});
app.get('/digital-library', (req, res) => {
    res.send('This is Digital Library Home.');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});