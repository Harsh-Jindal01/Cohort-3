function setTimeoutPromisified(duration){
  return new Promise(resolve => setTimeout(resolve, duration));
};


async function solve() {
  await setTimeoutPromisified(1000);
  console.log("Hi");
  
  await setTimeoutPromisified(3000);
  console.log("Hello");
  
  await setTimeoutPromisified(5000);
  console.log("Hi there.");
  
}

solve();