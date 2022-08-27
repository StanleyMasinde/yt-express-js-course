const router = require('express').Router()

const posts = [
    {
        id: 1,
        title: "Post number 1",
        body: "This is a body for post 1"
    },
    {
        id: 2,
        title: "Post number 2",
        body: "This is a body for post 2"
    },
    {
        id: 3,
        title: "Post number 3",
        body: "This is a body for post 3"
    }
]

router
    // Get all the posts
    .get('/', (req, res) => {
        res.render('index', { posts })
    })
    // Get post by Id
    .get('/:id', (req, res) => {
        const post = posts.find(post => post.id == req.params.id)

        if (post) {
            return res.render('show', { post })
        }

        return res.render('not-found', {message: `We could not find a post with id ${req.params.id}`})
    })

module.exports = router