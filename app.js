const express = require('express')
const bodyParser = require('body-parser')
const { Tweet } = require('./sequelize')
const app = express()
app.use(bodyParser.json())
// Create a Tweet
app.post('/demoApi/author', (req, res) => {
console.log(req.body)
Author.create(req.body)
.then(author => res.json(author))
})
// get all tweet
app.get('/demoApi/books', (req, res) => {
Book.findAll().then(books =>
res.json(books))
})

// get tweet by  tweetId
app.get('/demoApi/book/:id', (req, res) => {
Book.findOne(
{
where: { id: req.params.id, },
}
).then(book => res.json(book))
})


const port = 3000
app.listen(port, () => {console.log(`Running on http://localhost:${port}`)
})