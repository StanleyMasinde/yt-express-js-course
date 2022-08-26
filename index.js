const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Hello world')
})
const users = [
    {
        id: 1,
        name: "John Doe",
        email: "john@example.com"
    },
    {
        id: 2,
        name: "Jane Doe",
        email: "jane@example.com"
    }
]
app.get('/users', (req, res) => {
    res.json(users);
})

app.get('/users/:id', (req, res) => {
    const userId = req.params.id
    const user = users.find(user => {
        return user.id == userId
    })

    if(user) {
        return res.json(user)
    }

    return res.status(404).json('User not found')
})

app.listen(3000, () => {
    console.log('application running on http://localhost:3000')
})

