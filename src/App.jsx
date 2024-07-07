import React from 'react'
import { useState } from 'react'



const App = () => {
  const [count,setCount] = useState(12);

  const incrementer = () => {
    setCount((count) => count+1);
  }

  const decrementer = () => {
    setCount((count) => Math.max(0,count-1));
  }

  return (
    <div width-50>
        <button
    type="button"
    className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    onClick={incrementer}
  >
    Increment
  </button>
      <h1 > Count is {count} </h1>
      <p > tumi ekta beyadop</p>
      <button
    type="button"
    onClick={decrementer}
    class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
  >
    Decrement
  </button>
    </div>
    
  )
}

export default App