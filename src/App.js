import React, { useState } from "react";
import "./styles.css";
import Inputs from "./Components/Inputs";
import Stats from "./Components/Stats";
import GeneratorRandomNumber from "./Components/GeneratorRandomNumber";
import Footer from "./Components/Footer";

export default function App() {
  const [isEnable, setIsEnable] = useState(true);
  const [userNumbers, setUserNumbers] = useState(Array(6).fill(""));
  const [winningNumbers, setWinningNumbers] = useState([]);
  const [sameNumber, setSameNumber] = useState([]);
  const [counter, setCounter] = useState({
    playedTimes: 0,
    credits: 0,
    maxSameNum: [],
  });

  const handleIsEnableChange = (isEnable) => {
    setIsEnable(isEnable);
  };

  const handleUserNumbersChange = (usersNumbers) => {
    setUserNumbers(usersNumbers);
  };

  const handleWinningNumbersChange = (winningNumbers) => {
    setWinningNumbers(winningNumbers);
  };

  const handleSameNumberChange = (sameNumber) => {
    setSameNumber(sameNumber);
  };

  const handleCounterChange = (counter) => {
    setCounter(counter);
  };

  return (
    <div className="App">
      <header>
        <h1 className="h1-main">lottery simulator</h1>
      </header>
      <main>
        <GeneratorRandomNumber
          setIsEnable={handleIsEnableChange}
          setUsersNumbers={handleUserNumbersChange}
        />
        <h2 className="h2-main">Your lucky numbers</h2>
        <Inputs
          usersNumbers={userNumbers}
          setUsersNumbers={handleUserNumbersChange}
          isEnable={isEnable}
          setIsEnable={handleIsEnableChange}
          winningNumbers={winningNumbers}
          setWinningNumbers={handleWinningNumbersChange}
          sameNumber={sameNumber}
          setSameNumber={handleSameNumberChange}
          counter={counter}
          setCounter={handleCounterChange}
        />

        <Stats
          userNumbers={userNumbers}
          winningNumbers={winningNumbers}
          sameNumber={sameNumber}
          setSameNumber={handleSameNumberChange}
          counter={counter}
          setCounter={handleCounterChange}
        />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
