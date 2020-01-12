const uuid = require('uuid/v4');

const db = require('../utils/db');

class Post {
    constructor(title, body, author, createdDate) {
        this.id = uuid();
        this.title = title;
        this.body = body;
        this.author = author;
        this.createdDate = createdDate;
    }

    static async getAll() {
        try {
            const posts = await db.query('SELECT * FROM posts');
            return posts[0];
        } catch (err) {
            console.log(err);
        }
    }

    async save() {
        try {
            const result = await db.query(
                'INSERT INTO posts VALUES(?, ?, ?, ?, ?)',
                [this.id, this.title, this.body, this.author, this.createdDate]
            );
            return result;
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = Post;
