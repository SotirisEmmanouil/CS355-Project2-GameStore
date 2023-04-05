const http = require('http');
const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
const hostname = '127.0.0.1';
const port = 3000;
const feedbackList = [];

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.get('/submit', (req, res) => {
  res.send({"titles": feedbackList});
});

app.post('/submit', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message; // Get message from request body
  const feedback = { name, email, message }; // Create a feedback object with name, email, and message
  feedbackList.push(feedback); // Add the feedback object to the feedbackList array
  fs.appendFile('feedback.txt', `${name}, ${email}, ${message},\n`, (err) => { // Save the name, email, and message to the feedback.txt file
    if (err) throw err;
    console.log('Feedback saved to file');
  });
  res.send('Submitted Successfully!');
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
