import React,{useState} from 'react'

function HookCounterTwo() {
    const [count ,setCount] = useState(0)
    
    const incrementfive = () =>{
        for(let i=0;i<5;i++){
            setCount(prevCount => prevCount + 1)
        }
    }
  return (
    <div>
      Count : {count}
      <button onClick={()=>setCount(0)}>Reset</button>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
      <button onClick={incrementfive}>Increment five</button>
    </div>
  )
}

export default HookCounterTwo
