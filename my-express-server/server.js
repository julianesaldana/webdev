const express = require('express');
const app = express();
const port = 3000;

// default webpage
app.get('/', (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

// webpage at /contact
app.get('/contact', (req, res) => {
    res.send("Contact me at: julianesaldana@gmail.com");
});

// webpage at /about
app.get('/about', (req, res) => {
    res.send("ABOUT ME: My name is Julian Saldana and I like basketball and food.");
});

// hobbies
app.get('/hobbies', (req, res) => {
    res.send("<ul><li>Basketball</li><li>Coding</li></ul>");
});

// hosting page on local host port 3000
app.listen(port, () => {
    console.log("Example app listening on port ${port}");
  });