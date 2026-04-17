import './Timer.css'
import { useState } from "react";

export default function Timer() {

    const [run, setRun] = useState(true);
    const [calls, setCalls] = useState(10000);

    function getDateAsString() {
        let d = new Date();
        return d.getHours() + ":" + d.getMinutes() + ":"
            + d.getSeconds();
    }

    return (
        <div className="App">
            <div className="timer"> {getDateAsString()} </div>
            <div className="timer"> {calls} </div>
            <div className="timer"> {run ? 'ON' : 'OFF'} </div>
        </div>
    );
}