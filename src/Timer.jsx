import './Timer.css'
import { useState, useEffect } from "react";

export default function Timer({initNumber, doRun}) {

    // calculate and return time (hh:mm:ss)
    function getDateAsString() {
        let d = new Date();
        return d.getHours() + ":" + d.getMinutes() + ":"
            + d.getSeconds();
    }

    // define and set to given value
    const [num, setNum] = useState(initNumber);

    // define and set to current time
    const [time, setTime] = useState(getDateAsString());

    // get current time every second and update UI via setter method
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(getDateAsString());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // decrement passed variable IF doRun is true
    useEffect(() => {
        if (!doRun) return;

        const interval = setInterval(() => {
            setNum(prev => prev - 1);
        }, 100);

        return () => clearInterval(interval);
    }, [doRun]);

    return (
        <div className="App">
            <div className="timer"> {time} </div>
            <div className="timer"> {num} </div>
            <div className="timer"> {doRun ? 'ON' : 'OFF'} </div>
        </div>
    );
}