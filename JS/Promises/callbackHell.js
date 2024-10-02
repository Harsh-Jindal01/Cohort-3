function callingFunc(callback){
  console.log("connecting to server.");
  setTimeout(() => {
    console.log("Fetching Data.");
    callback();
       
  }, 2000)
  
}

function showData(callback){
  console.log("collecting data from the server...");
  setTimeout(() => {
    console.log("Here is your data...");
    callback();   
  }, 5000)
  
}


callingFunc(function(){
  showData(function(){})
});

