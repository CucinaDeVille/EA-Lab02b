import './App.css'
import Timer from "./Timer.jsx"

export default function App() {

  return (
    <Timer initCalls="10000" doRun={true}></Timer>
  );
}