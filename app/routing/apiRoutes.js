const friends = require('../data/friends.js');

function friendsApi(app) {

  app.get('/api/friends', (request, response) => {
    response.json(friends)
    // console.log(friends)
  });

  app.post('/api/friends', (request, response) => {
    const newFriends = request.body;
    console.log(newFriends);
    friends.push(newFriends);
    response.json(newFriends);
  })
}
module.exports = friendsApi;
