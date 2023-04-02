const http = require('http');
const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
const hostname = '127.0.0.1';
const port = 3000;
const wishList = [];

app.get('/', (req, res) => {
  res.send('Hello world!');
});
app.get('/submit', (req, res) => {
  const title = req.body.title;
  res.send({"titles": wishList});
});
app.post('/submit', (req, res) => {
  const title = req.body.title;
    fs.appendFile('games.txt', req.body.title + ",\n", (err) => {
    if (err) throw err;
    console.log('Game saved to file');
  });
  res.send('Submitted!');
});
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

