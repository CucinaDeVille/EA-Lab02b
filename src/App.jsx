import './App.css'
import { useState } from "react";
import Timer from "./Timer.jsx"

export default function App() {

  const [run, setRun] = useState(true);

  return (
      <div>
        <Timer initCalls="10000" doRun={run} />

        <button className="NiceButton" onClick={() => setRun(prev => !prev)}>
          {String(run)}
        </button>
      </div>
  );
}