const express = require('express')
const app = express()
const cors = require('cors')
const apiRouter = require('./api')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use('/api', apiRouter)

app.listen(3005)
