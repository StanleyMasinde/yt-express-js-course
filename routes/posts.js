const router = require('express').Router()
const db = require('../database')

router
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

module.exports = router