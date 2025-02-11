const express = require('express');
const ejs = require('ejs');

const app = express();
const port = 3000;


// Middleware for parsing JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Uncomment the following line to enable EJS
app.set('view engine', "ejs");
// Basic route
app.get('/', (req, res) => {
    res.render('books');
});



// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke! 123');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});