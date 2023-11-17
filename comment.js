// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 8080;

// Set public folder
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Set routes
app.use('/', require('./routes/index'));
app.use('/api', require('./routes/api'));

// Start server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

// Path: routes/index.js
const express = require('express');
const router = express.Router();
const path = require('path');

// Home page
router.get('/', (req, res) => {
    res.render('index');
});

// Comment page
router.get('/comment', (req, res) => {
    res.render('comment');
});

// 404 page
router.get('*', (req, res) => {
    res.render('404');
});

module.exports = router;

// Path: routes/api.js
const express = require('express');
const router = express.Router();
const path = require('path');

// Comments
let comments = [
    {name: 'John', comment: 'Hello World'},
    {name: 'Jane', comment: 'Hi there'},
    {name: 'Bob', comment: 'I like turtles'}
];

// Get comments
router.get('/comments', (req, res) => {
    res.json(comments);
});

// Add comment
router.post('/comments', (req, res) => {
    const name = req.body.name;
    const comment = req.body.comment;

    comments.push({name, comment});
    res.json(comments);
});

module.exports = router;

// Path: views/index.ejs
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Basic Comment App</title>
    <link rel="stylesheet" href="/css/style.css">
</head>
<body>
    <h1>Basic Comment App</h1>
    <a href="/comment">Comment</a>
    <div id="comments"></div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min
