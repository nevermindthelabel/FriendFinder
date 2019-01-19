const friends = require('../data/friends.js');

function friendsApi(app) {

  app.get('/api/friends', (request, response) => {
    response.json(friends);
   
  });
  function compareFriendScores(scores1, scores2) {
    let sum = 0;
    scores1.forEach((score, index) => {
      const difference = score - scores2[index]
      sum += Math.abs(difference)

    })
    return sum;
  }


  app.post('/api/friends', (request, response) => {
    const newFriend = request.body;
    let currentLowestScore = compareFriendScores(friends[0].scores, newFriend.scores);
    let bestFriend = friends[0];

    newFriend.scores = newFriend.scores.map((score) => parseInt(score, 10))
    for (let i = 1; i < friends.length; i++) {
      const friendScore = compareFriendScores(friends[i].scores, newFriend.scores)

      if (friendScore < currentLowestScore) {
        currentLowestScore = friendScore
        bestFriend = friends[i];
      }

    }
    friends.push(newFriend);
    console.log(friends);
    console.log(bestFriend);
    console.log(`
    ${bestFriend.name},
    ${bestFriend.photo},
    ${bestFriend.scores}`);

    response.json(bestFriend);

  })
}
module.exports = friendsApi;

// function modalLogic() {
//   $('#myModal').modal('src', bestFriend.photo)
// }
// module.exports = modalLogic;
