const express = require('express');
const { message } = require('prompt');

const app = express();
app.use(express.json());

let users = [];

// generates a random long string(32 - length)
// function generateToken(){
//   let options = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
//   'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
//   '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
//   '!', '@', '#', '$', '%', '^', '&', '*'];

//   let token = "";
//   for(let i = 0; i < 32; i++){
//     token += options[Math.floor(Math.random() * options.length)]  
//     //Here the code inside the options will return the random number between the 0 to the length to options whill we declare above in line number 10.
//   }
//   return token;
// }

app.post("/signup", function(req, res){
  const username = req.body.username;
  const password = req.body.password;


  if(users.find(u => u.username == username)){
    res.json({
      message: "you alread have an account."
    })
    return;
  }

  users.push({
    username: username,
    password: password
  })

  res.json({
    message: "you have been signedin."
  })

  console.log(users);
  
})

app.post("/signin", function(req, res){
  const username = req.body.username;
  const password = req.body.password;

  const fondUser = users.find(function(u){
    if(u.username == username && u.password == password) return true;
    else return false;   
  })

  if(fondUser){
    const token = generateToken();
    fondUser.token = token;
    res.json({
      token: token
    })
  }else{
    res.status(403).send({
      message: "Invalid username or password"
    })
  }

  console.log(users);

})

app.get("/me", function(req, res){
  const token = req.headers.token;

  const foundUser = users.find(function (u){
    if(u.token == token){
      return true;
    }else{
      return false;
    }  
  })

  if(foundUser){
    res.json({
      username: foundUser.username,
      password: foundUser.password
    })
  }else{
    res.json({
      message: "Sorry!! Invalid Token."
    })
  }

})


app.listen(3000);