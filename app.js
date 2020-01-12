const path = require('path');

const bodyParser = require('body-parser');
const express = require('express');

// const Post = require('./models/post-model');
const postsRoutes = require('./routes/posts-routes');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(bodyParser.json());

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/new', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'edit.html'));
});

app.use('/posts', postsRoutes);

app.listen(3000, () => {
    console.log('Server is started at http://localhost:3000');
});
