import React, { useState, useEffect } from "react";

const Stats = (props) => {
  const [topNumbers, setTopNumbers] = useState([]);

  // const resetCounter = () => {
  //   props.setCounter({
  //     ...props.counter,
  //     playedTimes: 0,
  //   });
  // };

  const updateTopNumbers = () => {
    const allNumbers = props.userNumbers.concat(props.winningNumbers);
    const counts = {};

    allNumbers.forEach((num) => {
      counts[num] = (counts[num] || 0) + 1;
    });

    const sortedNumbers = Object.keys(counts).sort(
      (a, b) => counts[b] - counts[a]
    );

    setTopNumbers(sortedNumbers.slice(0, 5));
  };

  useEffect(() => {
    updateTopNumbers();
  }, [props.winningNumbers]);

  return (
    <div className="stats">
      <table className="center">
        <tbody>
          <tr>
            <td>Winning numbers:</td>
            <td>
              {props.winningNumbers.map((num, i) =>
                i !== 5 ? (
                  <span className="white-cir white-cir2">{num}</span>
                ) : (
                  <span className="red-cir red-cir2">{num}</span>
                )
              )}
            </td>
          </tr>
          <tr>
            <td>Your numbers:</td>
            <td>
              {props.userNumbers.map((num, i) =>
                i !== 5 ? (
                  <span
                    className={`${
                      !num
                        ? ""
                        : props.winningNumbers.includes(num)
                        ? "white-cir yellow-txt"
                        : "gray-cir"
                    }`}
                  >
                    {num}
                  </span>
                ) : (
                  <span
                    className={`${
                      !num
                        ? ""
                        : props.winningNumbers[5] === props.userNumbers[5]
                        ? "redWin-cir yellow-txt"
                        : "red-cir"
                    }`}
                  >
                    {num}
                  </span>
                )
              )}
            </td>
          </tr>

          <tr>
            <td>Same number</td>
            <td>
              {props.sameNumber.map((num) =>
                !num ? (
                  ""
                ) : String(num).length <= 2 ? (
                  <span className="white-cir">{num}</span>
                ) : (
                  <span className="red-cir">{String(num).slice(1, -1)}</span>
                )
              )}
            </td>
          </tr>

          <tr>
            <td>Maximum Same number</td>
            <td>
              {props.counter.maxSameNum.map((num) =>
                !num ? (
                  ""
                ) : String(num).length <= 2 ? (
                  <span className="white-cir">{num}</span>
                ) : (
                  <span className="red-cir">{String(num).slice(1, -1)}</span>
                )
              )}
            </td>
          </tr>
          <tr>
            <td>Total played</td>
            <td>
              {props.counter.playedTimes}{" "}
              {/* <button onClick={resetCounter} className="btn btn2">
                reset
              </button> */}
            </td>

          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Stats;
