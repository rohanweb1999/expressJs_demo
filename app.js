const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/employeeData'

const app = express()
mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection

con.on('open', () => {
    console.log('mongoose Connected');
    app.listen(3062, () => {
        console.log("Server Listen");
    })
})
app.use(express.json())
const employeeRouter = require('./router/apiRouter')
app.use('/allemployee', employeeRouter)
// {
//     "firstName":"rohan",
//     "lastName":"gajjart",
//     "email":"test@gamil.com",
//     "contact":646758756,
//     "password":65675785,
//     "confirmPassword":5658767,
//     "profession":"job"
// }

