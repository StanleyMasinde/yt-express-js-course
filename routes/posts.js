const router = require('express').Router()
const db = require('../database')

router
    // Show the page for post creation
    .get('/create', (req, res) => {
        res.render('create')
    }) 
    // Create a new post
    .post('/', (req, res, next) => {
        const { title, body } = req.body

        db.query("Insert into posts (title, body) VALUES (?,?)", [title, body], (err, results) => {
            if (err) {
                next(err)
            }

            res.redirect(`/posts/`)
        })
    })
    // Get all the posts
    .get('/', (req, res, next) => {
        db.query('SELECT * FROM POSTS', (err, results) => {
            if (err) {
                return next(err)
            }

            res.render('index', { posts: results })
        })
    })
    // Get post by Id
    .get('/:id', (req, res, next) => {
        db.query(`SELECT * FROM posts WHERE id = ${req.params.id}`, (err, results) => {
            if (err) {
                return next(err)
            }
            const post = results[0]

            if (post) {
                return res.render('show', { post })
            }

            return res.render('not-found', { message: `We could not find a post with id ${req.params.id}` })
        })
    })
    // Route to edit a post
    .get('/:id/edit', (req, res, next) => {
        db.query("SELECT * FROM posts WHERE id=?", [req.params.id], (err, post) => {
            if(err) {
                next(err)
            }
            res.render('edit', {post: post[0]})
        })
    })
    // Update a post
    .put('/:id', (req, res, next) => {
        const { title, body } = req.body
        db.query("UPDATE posts SET title=?, body=? WHERE id=?", [title, body, +req.params.id], (err, results) => {
            if(err) {
                next(err)
            }

            res.redirect(`/posts/${req.params.id}`)
        })
    })
    // Delete a post
    .delete('/:id', (req, res, next) => {
        db.query("DELETE FROM posts WHERE id=?", [req.params.id], (err, results) => {
            if(err) {
                next(err)
            }

            return res.redirect('/posts')
        })
    })

module.exports = router