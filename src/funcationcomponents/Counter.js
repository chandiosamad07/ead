import { useState } from "react";

export default function Counter(){

    const[count, setState] = useState(0)
    const[person , setPerson]= useState({name:'samad', age:23})

    function addProb(){
        setPerson({...person, age:person.age+1})
    }
    function increment(){
        setState(count+1)
    }
    
    function decrement(){
        setState(count-1)
    }

    return<>
    <p>{JSON.stringify(person)}</p>
    <button onClick={increment}>+</button>
    <span>{count}</span>
    <button onClick={decrement}>-</button>

    </>
}