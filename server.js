const express = require('express');
const path = require('path');

// const logicCss = path.join(__dirname, 'app/public');
// const friendsArray = path.join(__dirname, 'app/data');
// const bodyParser = require('body-parser');

const exportHtmlRoutes = require('./app/routing/htmlRoutes')
const friendsApi = require ('./app/routing/apiRoutes')

const app = express();
const PORT = process.env.PORT || 8080;

// middleware
// app.use(bodyParser.urlencoded({ extended: true}));
// app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('app/public'));
app.use('/app/data/friends.js', express.static(`${__dirname  }/app/data/friends.js`));

exportHtmlRoutes(app);
friendsApi(app);

app.listen(PORT, () => {
console.log(`App is listening on port ${PORT}`);
});
