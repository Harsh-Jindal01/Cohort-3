//callback Hell

function setThird() {
  console.log("Hello there..");
}

function setTwo() {
  console.log("Hello");
  setTimeout(setThird, 5000)
}
function setone() {
  console.log("Hi");
  setTimeout(setTwo, 3000)
}

// setTimeout(setone, 1000);



// Promisified Version.

function setTimeoutPromisified(duration){
  return new Promise((resolve) => setTimeout(resolve, duration));
};

setTimeoutPromisified(1000).then(() => {
  console.log("Hi");
  return setTimeoutPromisified(3000)
}).then(() => {
  console.log("Hello!");
  return setTimeoutPromisified(5000)
}).then(() => {
  console.log("hi there");
});


console.log("outside the promise function...");
