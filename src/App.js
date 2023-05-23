import './App.css';
import Car from './funcationcomponents/functionbaseCom';
import Counter from './funcationcomponents/Counter';
import Car1 from './classComponents/Car';
import Values from './ContextAPI';
import welcome from './classComponents/welcome';
function App() {
  return (
    <div className="App">
     <Car1 />
    <withLoading/>
    <Values/>
    <Welcome />
    </div>
  );
}

export default App;
