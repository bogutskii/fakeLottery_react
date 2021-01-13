import React, {useState} from "react";
import "./styles.css";
import Inputs from "./Components/Inputs";
import Stats from "./Components/Stats"
import GeneratorRandomNumber from './Components/GeneratorRandomNumber'

export default function App() {
    const [isEnable, setIsEnable] = useState(true)
    const [userNumbers, setUserNumbers] = useState(['','','','','',''])
  return (
    <div className="App">
      <h1 className="h1-main">
          lottery simulator
      </h1>

      <Inputs usersNumbers={userNumbers}
              setUsersNumbers={(usersNumbers)=>setUserNumbers(usersNumbers)}
              isEnable={isEnable}
              setIsEnable={(isEnable)=>setIsEnable(isEnable)}
      />

      <GeneratorRandomNumber setIsEnable={(isEnable)=>setIsEnable(isEnable)}
                             setUsersNumbers={(usersNumbers)=>setUserNumbers(usersNumbers)}/>
        {userNumbers.join(' ')}
      <Stats userNumbers={userNumbers}/>
    </div>
  );
}
