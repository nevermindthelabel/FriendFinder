const app = require('express');
const path = require('path');

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/survey', (request, response) => {
  response.sendFile(path.join(__dirname, 'survey.html'));
});
