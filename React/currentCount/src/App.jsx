import { useState, useRef } from "react"

function App() {
  const [currentCount, setCurrentCount] = useState(1);
  const timer = useRef;

  function startClock() {
    let value = setInterval(function () {
      setCurrentCount(c => c+1);
    }, 1000);
    timer.current = value;
  }

  function stopClock() {
    clearInterval(timer.current);
  }

  return (
    <>
      {currentCount}
      <br/>
      <button onClick={startClock}>Start</button>
      <button onClick={stopClock}>Stop</button>
    </>
  )
}

export default App
