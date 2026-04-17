import './Timer.css'
import { useState, useEffect } from "react";

export default function Timer({initCalls, doRun}) {

    function getDateAsString() {
        let d = new Date();
        return d.getHours() + ":" + d.getMinutes() + ":"
            + d.getSeconds();
    }

    const [calls, setCalls] = useState(initCalls);
    const [time, setTime] = useState(getDateAsString());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(getDateAsString());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (!doRun) return;

        const interval = setInterval(() => {
            setCalls(prev => prev - 1);
        }, 100);

        return () => clearInterval(interval);
    }, [doRun]);

    return (
        <div className="App">
            <div className="timer"> {time} </div>
            <div className="timer"> {calls} </div>
            <div className="timer"> {doRun ? 'ON' : 'OFF'} </div>
        </div>
    );
}