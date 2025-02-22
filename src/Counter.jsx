import React from 'react'
import { useState } from 'react'



const Counter = () => {
  const [count,setCount] = useState(12);

  const incrementer = () => {
    setCount((count) => count+1);
  }

  const decrementer = () => {
    setCount((count) => Math.max(0,count-1));
  }

  return (
    <div className='w-32 h-96 mx-auto my-auto px-5 py-8 '>
        <button
    type="button"
    className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    onClick={incrementer}
  >
    Increment
  </button>
      <h1 > Count is {count} </h1>
      <button
    type="button"
    onClick={decrementer}
    className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
  >
    Decrement
  </button>
    </div>
    
  )
}

export default Counter