import express from 'express';
const app = express()

let clientId = 0;


const messages = [
  {
    clientId: 0,
    text: "Welcome To Chat"
  }
];

app.use(express.json())
app.use(express.static('./public'))

app.post('/clients', (req, res) => {
  clientId = clientId + 1
  res.send(clientId.toString())
})

app.post('/messages', (req, res) => {
  messages.push(req.body)
  res.json(messages)
})

app.get('/messages', (req, res) => {
  res.json(messages)
})






app.listen(8080, () => console.log('server has started'))