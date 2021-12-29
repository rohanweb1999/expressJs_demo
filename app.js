const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/employeeData'

const app = express()
mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection

con.on('open', () => {
    app.listen(4000, () => {
        console.log("Server Listen");
    })
})
app.use(express.json())// define middleware
// const employeeRouter = require('./router/apiRouter')
app.use(require('./router/apiRouter'));
// {
//     "firstName":"rohan",
//     "lastName":"gajjart",
//     "email":"test@gamil.com",
//     "contact":646758756,
//     "password":65675785,
//     "confirmPassword":5658767,
//     "profession":"job"
// }

