import React from "react";

const Stats = (props) => {
  const resetCounter = () => {
    props.setCounter({
      ...props.counter,
      playedTimes: 0,
    });
  };
  return (
    <div className="Stats">
      <h1>Stats</h1>
      <table className="center">
        <tbody>
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
                        ? "white-cir"
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
                        ? "redWin-cir"
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
            <td>Winning numbers:</td>
            <td>
              {props.winningNumbers.map((num, i) =>
                i !== 5 ? (
                  <span className="white-cir">{num}</span>
                ) : (
                  <span className="red-cir">{num}</span>
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
            <td>total played</td>
            <td>{props.counter.playedTimes}</td>
          </tr>
          <tr>
            <button onClick={resetCounter} className="btn btn2">
              reset
            </button>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Stats;
