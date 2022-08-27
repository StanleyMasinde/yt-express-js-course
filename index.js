const express = require('express')

const app = express()
app.set('view engine', 'pug')

const usersRouter = require('./routes/users')
const postsRouter = require('./routes/posts')

// The index route 
app.get('/', (req, res) => {
    res.render('index', {
        title: "Hello awesome person?"
    })
})

app.use('/users', usersRouter)
app.use('/posts', postsRouter)

app.listen(3000, () => {
    console.log('application running on http://localhost:3000')
})

