import React, { useState, useEffect } from "react";
import "./styles.css";
import Inputs from "./Components/Inputs";
import Stats from "./Components/Stats";
import GeneratorRandomNumber from "./Components/GeneratorRandomNumber";
import Footer from "./Components/Footer";

const getRandomNumber = (max) => {
  return Math.floor(Math.random() * max) + 1;
};

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const createRandomDigit = () => {
  const digit = document.createElement("div");
  digit.className = "digit";
  digit.style.top = `${getRandomNumber(window.innerHeight)}px`;
  digit.style.left = `${getRandomNumber(window.innerWidth)}px`;
  digit.textContent = getRandomNumber(65);
  digit.style.fontSize = `${getRandomNumber(20) + 170}px`;
  digit.style.color = `${getRandomColor()}10`;
  digit.style.fontFamily = "sans-serif";
  document.body.appendChild(digit);

  setTimeout(() => {
    digit.remove();
  }, 3000);
};
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
  useEffect(() => {
    const intervalId = setInterval(createRandomDigit, 1000);
    return () => clearInterval(intervalId);
  }, []);

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
