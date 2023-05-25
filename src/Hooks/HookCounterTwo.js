import React,{useState} from 'react'

function HookCounterTwo() {
    const [count ,setCount] = useState(0)
  return (
    <div>
      Count : {count}
      <button onClick={()=>setCount(0)}>Reset</button>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
  )
}

export default HookCounterTwo
