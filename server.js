const http = require('http');
const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
const hostname = '127.0.0.1';
const port = 3000;
const orderList = [];

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.get('/submit', (req, res) => {
  res.send({"titles": orderList});
});

app.post('/submit', (req, res) => {
  const title = req.body.title;
  fs.appendFile('games.txt', title + ",\n", (err) => {
    if (err) throw err;
    console.log('Game saved to file');
  });
  res.send('Submitted Successfully!');
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
