
/*
Your `apiRoutes.js` file should contain two routes:

   * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
   * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
*/
const express = require('express');
// const path = require('path');
const friends = require('../data/friends.js');

const app = express();

app.get('/api/friends', (request, response) => response.json(friends));
console.log(friends)

app.post('/api/friends', (request, response) => {
  const newFriends = request.body;
  friends.push(newFriends);
});
