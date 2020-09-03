const express = require('express')
const messagesController = require('./controllers/messages_controller')

const app = express()
const port = 3001

app.use(express.json())
/* _dirname IS NOT DEFINED BELOW */
// app.use(express.static(_dirname + '/../public/build'))

const messagesBaseUrl = '/api/messages'

app.post(messagesBaseUrl, messagesController.create)
app.get(messagesBaseUrl, messagesController.read)
app.put(`${messagesBaseUrl}/:id`, messagesController.update)
app.delete(`${messagesBaseUrl}/:id`, messagesController.delete)


app.listen(port, () => {
    console.log(`This server is listening on port ${port}!!!!`)
})

