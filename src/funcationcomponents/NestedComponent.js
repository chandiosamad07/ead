import React from "react";

function ClickMe(){
    
    alert("Clicked")
     
}
function Outer() {
  return (
    <>
      <button onClick={ClickMe}>Click Me</button>
    </>
  );
}


export default function Inner() {
    return (
      <>
        <h1>Welcome to My App</h1>
        <Outer></Outer>
      </>
    );
  }