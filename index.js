const http = require('http')
const express = require('express')
const app = express()
const morgan = require ('morgan')
const cors = require('cors')

app.use(cors())

app.use(express.static('build'))


app.use(express.json())


morgan.token('body', (req, res) => JSON.stringify(req.body));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms  :body '));

let persons = [
    {
      "name": "Dan Abramov",
      "number": "12-43-234345",
      "id": 3
    },
    {
      "name": "Mary Poppendieck",
      "number": "39-23-6423122",
      "id": 4
    },
    {
      "name": "mac",
      "number": "1234",
      "id": 7
    },
    {
      "name": "tocmac",
      "number": "89999",
      "id": 8
    },
    {
      "name": "koka",
      "number": "4444",
      "id": 9
    },
    {
      "name": "koks",
      "number": "123",
      "id": 10
    },
    {
      "name": "njkj",
      "number": "123",
      "id": 11
    },
    {
      "name": "njkj smf ,",
      "number": "123",
      "id": 12
    },
    {
      "name": "njkjff3",
      "number": "123",
      "id": 13
    },
    {
      "name": "223",
      "number": "",
      "id": 14
    }
  ]





  app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => {
      //console.log(person.id, typeof person.id, id, typeof id, person.id === id)
      return person.id === id
    })
    console.log(person)
    if (person) {
        response.json(person)
      } else {
        response.status(404).end()
      }
  })


const Mainpage = `<p>Phonebook has info for ${persons.length} people</p><p>${new Date()}</p>`


app.get('/info', (request, response) => {
    response.send(Mainpage)
  })


  app.get('/', (request, response) => {
    response.send('Hello world')
  })
  
  app.get('/api/persons', (request, response) => {
    response.json(persons)
  })


  app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
  
    response.status(204).end()
  })


  const generateId = () => {
    return Math.floor(Math.random() * Math.floor(1000000))
  }
  
  
  app.post('/api/persons', (request, response) => {
    const body = request.body
 
    if (persons.some(person => person.name === body.name)
    ) {
      return response.status(400).json({
        error: 'name must be unique'
      })
    }
    
    if (!body.name || !body.number) {
      return response.status(400).json({ 
        error: 'name or number missing' 
      })
    }
  
    const person = {
      name: body.name,
      number: body.number,
      id: generateId(),
    }
  
    persons = persons.concat(person)
  
    response.json(person)
  })

  
  
  const PORT = process.env.PORT || 3021
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })