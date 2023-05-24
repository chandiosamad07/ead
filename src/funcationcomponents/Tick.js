import ReactDOM from 'react-dom'
const root = ReactDOM.createRoot(document.getElementById('root'));
export default function Tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
      <h2>It is {new Date().toDateString()}.</h2>
    </div>
  );
  root.render(element);
}

setInterval(Tick, 1000);