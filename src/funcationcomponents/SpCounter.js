import React from "react";
import { useState } from "react";
import Counter from "./Counter";

function MyButton(){
    const [count, setCount] = useState(0)

    function handleClick(){
        setCount(count+1);
    }

    return (
        <button onClick={handleClick}>
        Clicked {count} times
        </button>
    );
}
export default function SpCounter (){
    return(
        <div>
        <h1>Counters That update sparately</h1>
        <MyButton></MyButton>
        <MyButton></MyButton>
        </div>
    );
}