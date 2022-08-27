const express = require('express')
const bodyparser = require('body-parser')
const methodOveride = require('method-override')

const app = express()
app.use(bodyparser.urlencoded({extended: true}))
app.use(methodOveride('_method'))
app.set('view engine', 'pug')

const usersRouter = require('./routes/users')
const postsRouter = require('./routes/posts')

// The index route 
app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/users', usersRouter)
app.use('/posts', postsRouter)

app.listen(3000, () => {
    console.log('application running on http://localhost:3000')
})

