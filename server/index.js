var express = require("express")
var app = express()
var http = require("http").Server(app)
var bodyParser = require("body-parser")
var cors = require('cors')
var session = require('express-session')
var User = require('./user.model.js').User

app.use(cors())
app.use(express.static(__dirname + "/www"))
app.use(bodyParser.json())

// Configure session middleware
app.use(session({
    secret: 'your-secret-key', // Replace with a strong secret
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Use `true` if using HTTPS
}));


// starts server listening
let server = http.listen(3000, function(){
    let host = server.address().address
    let port = server.address().port
    console.log("server working")
})

// Api for login request
app.post("/api/auth", function (req, res){

    const users = [
        new User('marty', '28/02/1993', 31, 'martin.lark@hotmail.com', 'test', true),
        new User('john', '28/02/2000', 24, 'Test@hotmail.com', 'test', true),
        new User('caleb', '28/02/1993', 31, 'caleb@hotmail.com', 'test', true)
    ]

    if(!req.body){
        res.sendStatus(400)
    }

    let details = {}
    details.email = req.body.email
    details.password = req.body.password
    details.valid = false

    let user = null

    for(let i = 0; i < users.length; i++){
        if (details.email == users[i].username && details.password == users[i].password){
            user = users[i]
            break
        }
    }

    if (user && user.valid){
        const userDetails = {
            username: user.username,
            DOB: user.DOB,
            age: user.age,
            email: user.email,
            valid: user.valid
        }
        req.session.userDetails = userDetails;
        res.json(userDetails)
        console.log("successful log in")
    } else {
        res.status(401).json({valid:false, message: "invalid credentials"})
    }
})