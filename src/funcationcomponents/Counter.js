import { useState } from "react";

export default function Counter(){
    const [count, setState] = useState(0)

    function increment(){
       setState(count+1)
        // if(count<100){
        //     count++;
        //     document.getElementById('Counter').innerText = count;
        // }
    }

    
    function Decrement(){
        setState(count-1)
    }

    return <>
    <button onClick={increment}> + </button>
    <span id="Counter"> {count}</span>
    <button onClick={Decrement}> - </button>
    </>
}