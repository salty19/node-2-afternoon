const express = require('express')
const mc = require('./controllers/messages_controller')

const app = express()
const port = 3001

app.use(express.json())

const messagesBaseUrl = '/api/messages'

app.post(messagesBaseUrl, messagesController.create)
app.get(messagesBaseUrl, messagesController.read)
app.put(`${messagesBaseUrl}/:id`, messagesController.update)
app.delete(`${messagesBaseUrl}/:id`, messagesController.delete)


app.listen(port, () => {
    console.log(`This server is listening on port ${port}!!!!`)
})

