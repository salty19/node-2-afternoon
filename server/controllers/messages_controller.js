let messages = []
let id = 0

module.exports = {
    create: (req, res) => {
       const {date, time} = req.body
       
       const newMessages = {
           text,
           time,
           id,
       }

       messages.push(newMessages)

       id++

       res.status(200).send(messages)
    },

    read: (req, res) => {
        res.status(200).send(messages)
    },

    update: (req, res) => {
        const {id} = req.params
        
    },

    delete: (req, res) => {

    }
}