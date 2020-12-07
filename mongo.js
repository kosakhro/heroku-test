const mongoose = require('mongoose')

if ( process.argv.length<3 ) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const name = process.argv[3]
const number = process.argv[4]
const id =  Math.floor(Math.random() * Math.floor(1000000))
  

const url =
  `mongodb+srv://node_user:${password}@cluster0.znxvx.mongodb.net/phonebook-app?retryWrites=true&w=majority`
  //mongodb+srv://fullstack:<password>@clustertest.shast.mongodb.net/<dbname>?retryWrites=true&w=majority
  //mongodb+srv://node_user:<password>@cluster0.znxvx.mongodb.net/<dbname>?retryWrites=true&w=majority

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
  id: Number,
})

const Person = mongoose.model('Person', personSchema)

if ( process.argv.length==5 ){

    const person = new Person({
        name: name,
        number: number,
        id: id,
      })
      
      
      person.save().then(response => {
        console.log('person saved!');
        mongoose.connection.close();
      })

}

else {
    Person.find({ }).then(result => {
        result.forEach(person => {
          console.log(person)
        })
        mongoose.connection.close()
      })
}

