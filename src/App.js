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
import HookCounterTwo from "./Hooks/HookCounterTwo";
import HookCounterThree from "./Hooks/HookCounterThree";
import HookCounterfour from "./Hooks/HookCounterfour";
import EffectCounterone from "./Hooks/EffectCounterone";
import HookMouse from "./Hooks/HookMouse";
import MouseContainer from "./Hooks/MouseContainer";
import DataFecting from "./Hooks/DataFecting";
import YoutubeForm from "./Forms/YoutubeForm";
import Home from "./Router/Home";
import { Routes ,Route } from 'react-router-dom';
import About from "./Router/About";
import NavBar from "./Router/NavBar";
import OrderSummray from "./Router/OrderSummray";
import TodoList from  '../src/TodoList'
import ComponentC from './Context/ComponentC'
import { UserProvider } from "./Context/UserContext";
function App() {
  return (
    <div className="App">
      <UserProvider value={' Abdul Samad'}>
      <ComponentC></ComponentC>
      </UserProvider>
      {/* <TodoList/> */}
    {/* <NavBar></NavBar>
    <Routes>
      <Route path ='/' element = {<Home />}></Route>
      <Route path ='about' element = {<About />}></Route>
      <Route path = 'order' element = {<OrderSummray/>}></Route>
    </Routes> */}

     {/* <YoutubeForm></YoutubeForm>  */}
      {/* <DataFecting /> */}
      {/* <MouseContainer></MouseContainer> */}
      {/* <HookMouse /> */}
{/* 
      <EffectCounterone></EffectCounterone>
      <HookCounterfour /> */}
      {/* <HookCounterThree /> */}
     {/* <HookCounterTwo></HookCounterTwo> */}
      {/* <HookCounter/>
      <ClassCounter/> */}
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
