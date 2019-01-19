const express = require('express');
const path = require('path');

const exportHtmlRoutes = require('./app/routing/htmlRoutes')
const friendsApi = require ('./app/routing/apiRoutes')

const app = express();
const PORT = process.env.PORT || 8080;

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('app/public'));

exportHtmlRoutes(app);
friendsApi(app);

app.listen(PORT, () => {
console.log(`App is listening on port ${PORT}`);
});
