const express = require('express');
const app = express();
const aboutRouter = require('./about');
const port = 3000;

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello from the homepage!');
});

// Define another route
app.get('/page', (req, res) => {
  res.send('This is the page.');
});

app.use('/about', aboutRouter);

// Start the server
const server = app.listen(port, () => {
  console.log(`Server is listening on port ${server.address().port}`);
});