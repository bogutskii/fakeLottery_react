import React, {useState} from "react";
import "./styles.css";
import Inputs from "./Components/Inputs";
import Stats from "./Components/Stats"
import GeneratorRandomNumber from './Components/GeneratorRandomNumber'
import Footer from './Components/Footer'


export default function App() {
    const [isEnable, setIsEnable] = useState(true)
    const [userNumbers, setUserNumbers] = useState(['', '', '', '', '', ''])
    const [winningNumbers, setWinningNumbers] = useState([])
    const [sameNumber, setSameNumber] = useState([])
    const [counter, setCounter] = useState({
        playedTimes: 0,
        credits: 0,
        maxSameNum: []
    })


    return (
        <div className="App">
            <h1 className="h1-main">
                lottery simulator
            </h1>

            <GeneratorRandomNumber setIsEnable={(isEnable) => setIsEnable(isEnable)}
                                   setUsersNumbers={(usersNumbers) => setUserNumbers(usersNumbers)}

            />
            <Inputs usersNumbers={userNumbers}
                    setUsersNumbers={(usersNumbers) => setUserNumbers(usersNumbers)}
                    isEnable={isEnable}
                    setIsEnable={(isEnable) => setIsEnable(isEnable)}
                    winningNumbers={winningNumbers}
                    setWinningNumbers={(winningNumbers) => setWinningNumbers(winningNumbers)}
                    sameNumber={sameNumber}
                    setSameNumber={(sameNumber) => setSameNumber(sameNumber)}
                    counter={counter}
                    setCounter={(counter) => setCounter(counter)}

            />


            <Stats userNumbers={userNumbers}
                   winningNumbers={winningNumbers}
                   sameNumber={sameNumber}
                   setSameNumber={(sameNumber) => setSameNumber(sameNumber)}
                   counter={counter}
                   setCounter={(counter) => setCounter(counter)}

            />

            <Footer/>
        </div>
    );
}
