// server.js    
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Chatkit = require('@pusher/chatkit-server');

const app = express();

const chatkit = new Chatkit.default({
  instanceLocator: 'v1:us1:3dc381fe-f37d-44a4-9e46-304cd639e859',
  key: '4a121219-0dfc-4ac8-b37c-9b33c6efcf21:GN02NiVKOUdEEUVtcG0uKK3t5e28tyGtB8CBHxwNevs=',
});

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.use(cors());

app.post('/users', (req, res) => {
  const { username } = req.body;

  chatkit
    .createUser({
      id: username,
      name: username,
    })
    .then(() => {
      res.sendStatus(201);
    })
    .catch(err => {
      if (err.error === 'services/chatkit/user_already_exists') {
        console.log(`User already exists: ${username}`);
        res.sendStatus(200);
      } else {
        console.log("no fetching anything");
        res.status(err.status).json(err);
      }
    });
});

app.post('/auth', (req, res) => {
  const authData = chatkit.authenticate({
    userId: req.query.user_id,
  });
  res.status(authData.status).send(authData.body);
});


const PORT = 3001;

app.listen(PORT, err => {
  if (err) {
    console.log("can't get anything")
    console.log(err);
  } else {
    console.log(`Running on port ${PORT}`);
  }
});