// function random(resolve) { // resolve is also a function
//   resolve();
  
// }
// let p = new Promise(random); // supposed to return you something eventually
// // console.log(p)

// function callback(){
//   console.log("promise secceded");
  
// }
// p.then(callback);

// ==========================

const fs = require('fs');
function readTheFile(sendtheFinalValeHere){
  // do your thing, whenever u have the final value, call sendtheFinalValeHere("finalValue");
  fs.readFile("E:/Programming/Cohort 3/JS/a.txt", "utf-8", function(err, data) {
    sendtheFinalValeHere(data);
  })
}

function readFile(fileName) {
  return new Promise(readTheFile);
}

const p = readFile(); //p is the proxy for the final value.
function callback(contents){
  console.log(contents);
  
}

p.then(callback)