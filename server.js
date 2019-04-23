const express = require('express')
const cors = require('cors')
const postsRouter = require('./posts/posts-routes')
const server = express()

server.use(express.json())
server.use(cors({
  origin: 'http://localhost:3000'
}))

server.get('/', (req, res) => {
  res.send(`
        <h1>Welcome To the Lambda Posts API</h1>
        `)
})

server.use('/api/posts', postsRouter)

module.exports = server
