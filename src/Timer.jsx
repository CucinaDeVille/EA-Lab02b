import './Timer.css'

export default function Timer() {

    function getDateAsString() {
        let d = new Date();
        return d.getHours() + ":" + d.getMinutes() + ":"
            + d.getSeconds();
    }

    return (
        <div className="App">
            <div className="timer"> {getDateAsString()} </div>
            <div className="timer">Zeile 2</div>
            <div className="timer">Zeile 3</div>
        </div>
    );
}