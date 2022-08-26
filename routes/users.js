const router = require('express').Router()

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
router
    .get('/', (req, res) => {
        res.json(users);
    })
    .get('/:id', (req, res) => {
        const userId = req.params.id
        const user = users.find(user => {
            return user.id == userId
        })

        if (user) {
            return res.json(user)
        }

        return res.status(404).json('User not found')
    })
    .post('/', (req, res) => {
        res.json('User created!!')
    })

module.exports = router
