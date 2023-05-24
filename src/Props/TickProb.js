import ReactDOM from 'react-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));

function Clock(props){
    return(
        <div>
            <h1>Hello, World!</h1>
            <h2>it is { props.date.tolocaleTimeStringI()}</h2>
        </div>
    );
}

export default function Tickp(){
    root.render(<Clock date = {new Date()}></Clock>)
}
setInterval(Tickp,1000)