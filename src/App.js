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
function App() {
  return (
    <div className="App">
      <Car1 />
      <withLoading />
      <Values />
      <Welcome></Welcome>
      <Greeting></Greeting>
      <Greetingprop name="Abdul" />
      <Greetingprop name="Samad" />
      <Greetingprop name="Chandio" />
      <Inner></Inner>
      <Profile />
    </div>
  );
}

export default App;
