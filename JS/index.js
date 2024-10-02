// sum of numbers from 1 to n.
// with formula (n*(n+1))/2
function sum(n){
  result = (n * (n + 1))/2
  return result
}

// console.log(sum(5));


function sumN(a){
  let ans = 0;
  for (let i = 1; i <= a; i++) {
    ans = ans + i;
  }
  return ans
}

// console.log(sumN(5));

// Assignment: Try to create Promisified Asynchronisd funtions.(for intemediate)

const fs = require("fs");

const contents = fs.readFileSync("./a.txt", "utf-8");
console.log(contents);


// How to Differentiate between cpu task and input output task.