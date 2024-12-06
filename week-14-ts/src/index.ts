let x: number = 69;
// console.log(x);


function greetings(firstName:string) {
  console.log(`Hello ${firstName}`);
  
}
// console.log(greetings("harsh"));

function sum(a:number, b:number) {
  console.log(`Sum is: ${a+b}`);  
}
// console.log(sum(60, 9));


// age checker

function ageChecker(age:number) {
  if(age >= 18) return true;
  else return false;
}

let age = ageChecker(21);
// console.log(age);

//function in fun

function delayCall(fn:() => void) {
  setTimeout(fn, 1000);
}

let fn = delayCall(function () {
  console.log("hello");  
})

// console.log(fn);


// creating a type for object

type user = {
  name: string;
  age: number;
}

const eUser: user = {
  name : "harsh",
  age : 32,
}

console.log(eUser.name);
