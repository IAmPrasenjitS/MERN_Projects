const express = require('express')
const app = express()
const port = 3000
const todoRoutes = require('./routes/todos.route')
const dbConnection = require('./db/connection')
const cors = require('cors')
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use('/api/todos', todoRoutes)

dbConnection().then(() => {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
}).catch((err) => {
    console.log('Error Found: ' + err)
})




