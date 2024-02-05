const connectToMongo = require('./db')


connectToMongo();

const express = require('express')
const app = express()
const port = 3000
app.use(express.json())       //it is require to write so that to read req.body otherwise you cant work with request bosy
app.use('/auth', require('./Routes_express/authent'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})