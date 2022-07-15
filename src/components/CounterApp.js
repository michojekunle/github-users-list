import { useState } from 'react'

const CounterApp = () => {
    let iniTialNum = 0;
    const [counter, setCounter] = useState(iniTialNum);

    function addToCounter() {
        setCounter(iniTialNum+1)    
    }

    
    function subtractFromCounter() {
        setCounter(iniTialNum-1)    
    }

    
    function resetCounter() {
        setCounter(0);    
    }
  return (
    <div>
      HELLO
       <h2>CounterApp</h2>

       <h1>{counter}</h1>
        <button onClick={addToCounter()}>Add</button>
        <button onClick={subtractFromCounter()}>Subtract</button>
        <button onClick={resetCounter()}>Reset</button>
    </div>
  )
}

export default CounterApp;