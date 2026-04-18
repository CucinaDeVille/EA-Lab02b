import './App.css'
import {useState} from "react";
import Timer from "./Timer.jsx"

export default function App() {

    // define and set state of run
    const [run, setRun] = useState(false);

    return (
        <div>

            // call Timer and pass values as props
            <Timer initNumber="10000" doRun={run}/>

            // define button and anonymous function to change value of run
            <button className="NiceButton" onClick={() => setRun(prev => !prev)}>
                {String(run)}
            </button>
        </div>
    );
}