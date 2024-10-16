const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'helloharsh123';
app.use(express.json());

let users = [];

app.post('/signup', function(req, res){
  const username = req.body.username;
  const password = req.body.password;

  if(users.find(u => u.username == username)){
    res.json({
      message: "You already have an account."
    })
  }else{
    users.push({
    username: username,
    password: password
  })

    res.json({
      messsage: 'Signup Successful!.'
    })
  }
})

app.post('/signin', function(req, res){
  const username = req.body.username;
  const password = req.body.password;

  const foundUser = users.find(u => {
    if(u.username == username && u.password == password){
      return true;
    }else{
      return false;
    }
  })

  if (foundUser) {

    const token =  jwt.sign({
      username: username
    }, JWT_SECRET);

    res.json({
      token: token
    })
  }else{
    res.status(403).send({
      message: "Soory, Invalid username or password."
    })
  }
})

function auth(req, res, next){
  const token j= req.headers.token;
  const decodeInformation = jwt.verify(token, JWT_SECRET);
  if(decodeInformation){
    res.username = decodeInformation.username;
    next():
  }else{
    res.json({
      message: "you are logged out!"
    })
  }
}

app.get('/me', auth, function(req, res){

  const foundUser = users.find(u => {
    if(u.username == username){
      return true;
    }else{
      return false;
    }
  })

  if (foundUser) {
    res.json({
      username: foundUser.username,
      password: foundUser.password
    })
  }else{
    res.json({
      message: "Soory, Invalid token."
    })
  }
})
app.listen(3000);