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
import Tickp from "./Props/TickProb";
function App() {
  return (
    <div className="App">
      {/* <Car1 />
      <withLoading />
      <Values />
      <Welcome></Welcome>
      <Greeting></Greeting>
      <Inner></Inner>
      <Profile />
      <SpCounter/> */}

      <Greetingprop name="Abdul" />
      <Greetingprop name="Samad" />
      <Greetingprop name="Chandio" />

      <Tick />
  <Tickp />
    </div>
  );
}

export default App;
