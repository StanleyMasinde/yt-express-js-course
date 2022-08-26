const express = require('express')

const app = express()
const usersRouter = require('./routes/users')

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.use('/users', usersRouter)

app.listen(3000, () => {
    console.log('application running on http://localhost:3000')
})

