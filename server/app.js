require('dotenv').config()
const express = require('express')
const errorHandler = require('./middleware/errorhandler')
const app = express()
const port = process.env.PORT || 3000

const cors = require('cors')
app.use(cors())

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', require('./routers'))

app.use(errorHandler)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

module.exports = app
