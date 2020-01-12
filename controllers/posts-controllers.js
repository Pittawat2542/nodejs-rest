const Post = require('../models/post-model');

exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.getAll();
        res.json({
            posts: posts
        });
    } catch (err) {
        console.log(err);
    }
};

exports.getPostById = (req, res) => {};

exports.createPost = async (req, res) => {
    const {title, body, author} = req.body;
    const newPost = new Post(title, body, author, new Date());
    try {
        await newPost.save();
        return res.json({
            post: newPost
        })
    } catch (error) {
        console.log(error);
    }
};

exports.updatePostById = (req, res) => {};

exports.deletePostById = (req, res) => {};
