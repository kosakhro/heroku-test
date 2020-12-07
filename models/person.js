const mongoose = require('mongoose')
const validate = require('mongoose-unique-validator')


const url = process.env.MONGODB_URI

console.log('connecting to', url)

mongoose.connect(url, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true, 
  useFindAndModify: false, 
  useCreateIndex: true })
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: [3, 'Minimum 3 letters'],
    required: true,
    unique: true
    
  },
  number: {
    type: String,
    validate: {
      validator: number => {
        const digits = number.match(/\d/g).join('')
        return digits.length >= 8
      },
      message: props => `${props.value} minimum 8 digits`
    },
  }
})

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

personSchema.plugin(validate)

module.exports = mongoose.model('Person', personSchema)