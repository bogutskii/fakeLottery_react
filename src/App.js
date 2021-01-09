import React, {useState} from "react";
import "./styles.css";
import Inputs from "./Components/Inputs";
import Stats from "./Components/Stats"
import GeneratorRandomNumber from './Components/GeneratorRandomNumber'

export default function App() {
    const [isEnable, setIsEnable] = useState(true)
    const [usersNumbers, setUsersNumbers] = useState([])
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Inputs isEnable={isEnable} setIsEnable={(isEnable)=>setIsEnable(isEnable)}/>
        {usersNumbers.join(' ')}
      <GeneratorRandomNumber setUsersNumbers={usersNumbers=>setUsersNumbers(usersNumbers)}/>
      <Stats/>
    </div>
  );
}
