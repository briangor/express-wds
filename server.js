const express = require("express");
const app = express()

app.use(logger)

// inbuilt middleware to send static files
app.use(express.static("public"))

// inbuilt middleware to access info coming from forms (or the req body)
app.use(express.urlencoded({ extended: true }))

app.use(express.json())

app.set("view engine", "ejs")

const url = 'https://reqres.in/api'
const users = '/users?page=2'
const user = '/users/2'

app.get('/', (req, res) => {
    console.log("Here")
    //res.status(200).send("Hi")
    //res.sendStatus(500)
    //res.download("server.js")//download
    //res.status(500).json({ message: 'Error'})
    res.status(200).json({ title: 'OK', message: 'Success' })
    res.status(200).send('Client')
})

/* async function getUser() {
    let user_data = await fetch(`https://reqres.in/api/users/2`)
    return user_data
}

//const data = getUser();
//console.log(data) */

/* app.get('/posts', async (req, res) => {
    const data = await fetch(url+user)
    console.log(url+users)
    res.send('post users')
    console.log(data)
}) */

const userRouter = require('./routes/users')
app.use('/users', userRouter)

// middleware
function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

app.listen(3001)