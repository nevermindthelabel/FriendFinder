const path = require('path');

function exportHtmlRoutes(app) {
  app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, '../public/home.html'));
  });

  app.get('/survey', (request, response) => {
    response.sendFile(path.join(__dirname, '../public/survey.html'));
  });
}

module.exports = exportHtmlRoutes;
