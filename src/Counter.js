import React, {useState} from 'react'
import './Counter.css'

export default function Counter() {
    const [count, setCount] = useState(0)
  return (
    <div className='container'>
        <h1>Counter App</h1>
        <p>Count: {count}</p>
        <button onClick={()=>{setCount((prevCount)=>(prevCount+1))}}>Increment</button>
        <button onClick={()=>{setCount((prevCount)=>(prevCount-1))}}>Decrement</button>
    </div>
  )
}
