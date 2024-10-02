function connectToServer() {
  console.log("connecting to server");
  
  return new Promise(function(resolve){
    setTimeout(() => {
      resolve("Connected!!")
    }, 2000);
  })
}

function getCourses() {
  console.log("getting courses...");
  
  return new Promise(function(resolve){
    setTimeout(() => {
      resolve("Here is your course!")
    }, 3000);
  })
}

connectToServer()
.then(function(response){
  console.log(response);
  
  return getCourses()
})
.then(function(response){
  console.log(response);
  
})