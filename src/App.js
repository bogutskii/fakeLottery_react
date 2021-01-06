import React, {useState} from "react";
import "./styles.css";
import Inputs from "./Components/Inputs";

export default function App() {
    const [isEnable, setIsEnable] = useState(true)

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Inputs isEnable={isEnable} setIsEnable={(isEnable)=>setIsEnable(isEnable)}/>
    </div>
  );
}
