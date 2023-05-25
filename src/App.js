import "./App.css";
import Car from "./funcationcomponents/functionbaseCom";
import Counter from "./funcationcomponents/Counter";
import Car1 from "./classComponents/Car";
import Values from "./ContextAPI";
import Welcome from "./classComponents/welcome";
import Greeting from "./funcationcomponents/greeting";
import Greetingprop from "./Props/Greetingprop";
import Inner from "./funcationcomponents/NestedComponent";
import Profile from "./funcationcomponents/Avator";
import SpCounter from "./funcationcomponents/SpCounter";
import Tick from "./funcationcomponents/Tick";
import Clock from "./classComponents/Clock";
import MyForm from "./Forms/MyForm";
import Form from "./Forms/nameAge";
import ClassCounter from "./Hooks/ClassCounter";
import HookCounter from "./Hooks/HookCounter";
function App() {
  return (
    <div className="App">
      <HookCounter/>
      <ClassCounter/>
      {/* <Form/> */}
      {/* <Car1 />
      <withLoading />
      <Values />
      <Welcome></Welcome>
      <Greeting></Greeting>
      <Inner></Inner>
      <Profile />
      <SpCounter/>  

       <Greetingprop name="Abdul" />
      <Greetingprop name="Samad" />
      <Greetingprop name="Chandio" /> 
    <Clock /> */}
      {/* <Tick />    */}
            
    </div>
  );
}

export default App;
