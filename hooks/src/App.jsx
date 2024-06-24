import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState('')

  const addValue = () => {
    console.log("Clicked")
    setCounter(counter +1);
    console.log(counter)
  }

  const removeValue = () => {
    setCounter(counter -1);
    console.log(counter)
  }
  return (
    <>
      <h1>Counter Project</h1>
      <h3>Counter value: {counter}</h3>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
