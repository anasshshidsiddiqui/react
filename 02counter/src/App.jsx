import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let counter = 15

  let [counter, setcounter] = useState(15)

  const addValue = () => {
    counter = counter + 1;
    if(counter <= 20){
      setcounter(counter)
    }
    
  }

  const removeValue = () => 
  {
    setcounter(counter - 1)
    if(counter <= 0)
    {
      setcounter(counter = 0)
    }
    

    
    
  }
  return (
    <>
      <h1>chao aur react</h1>
      <h2>counter {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>remove value</button>
      <p>{counter}</p>
    </>
  )
}

export default App
