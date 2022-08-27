const express = require('express')

const app = express()
app.set('view engine', 'pug')

const usersRouter = require('./routes/users')

// The index route 
app.get('/', (req, res) => {
    res.render('index', {
        title: "Hello awesome person?"
    })
})

// Respond with a user's name passed as a param
app.get('/:name', (req, res) => {
    const name = req.params.name

    res.render('index', {
        title: `Hello ${name}?`
    })
})

app.use('/users', usersRouter)

app.listen(3000, () => {
    console.log('application running on http://localhost:3000')
})

