const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose');
const router = require('./Routes/productRoutes')
const errorMiddleware = require("./Middleware/errorMiddleware")
const cors = require('cors')

const port = process.env.PORT
const db = process.env.MONGODB_URL
const frontend = process.env.FRONTEND

var corsOptions = {
    origin: frontend,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use(cors(corsOptions))
app.use(express.json())
// if you want to use other formats to send data to database
app.use(express.urlencoded({extended: false}))
app.use('/api/products', router)
app.use('/', errorMiddleware)


async function main() {
    await mongoose.connect(db);
}

main()
    .then(() => console.log('successfully connected to database'))
    .catch(err => console.log(err));

app.listen(port, () => {
    console.log(`our app is listening at port ${port}`)
})
