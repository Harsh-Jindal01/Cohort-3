import { useState } from "react"

function App() {
  return <div>
    Hi there
    <Counter></Counter>
  </div>
}

function Counter() {

  const [count, setCount] = useState(0);
  // Functions related to components should be defined inside the conponests itself.

  function increaseCount() {
    setCount(count + 1);
  }

  return <div>
    <h1>{count}</h1>
    <button onClick = {increaseCount}>Increase Count</button>
  </div>
}

export default App

