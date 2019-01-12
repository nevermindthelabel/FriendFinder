const express = require('express');

const exportHtmlRoutes = require('./app/routing/htmlRoutes')

const app = express();
const PORT = process.env.PORT || 8080;

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// add /survey
exportHtmlRoutes(app);

app.listen(PORT, () => {
console.log(`App is listening on port ${PORT}`);
});
