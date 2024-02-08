const connectToMongo = require('./db')


connectToMongo();

const express = require('express')
const app = express()
const port = 5000
app.use(express.json())       //it is require to write so that to read req.body otherwise you cant work with request bosy
app.use('/sign_up', require('./Routes_express/create_user'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})