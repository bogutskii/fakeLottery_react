import React from "react";
//import "../src/styles.css";

const Inputs = () => {
  let playBtn = true;
  const inputNumbers = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0
  };

  const limit = (e, key) => {
    if (e.target.value > 69 || e.target.value == "00") {
      e.target.value = e.target.value.substr(0, 1);
    } else if (e.target.value.length > 2) {
      e.target.value = e.target.value.substr(0, 2);
    }
    inputNumbers[key] = e.target.value;
    checkFields();
    console.log(e.target.value, key);
  };

  const checkFields = () => {
    Object.values(inputNumbers);
  };

  return (
    <div>
      <input type="number" className="numbox" onKeyUp={(e) => limit(e, 1)} />
      <input type="number" className="numbox" onKeyUp={(e) => limit(e, 2)} />
      <input type="number" className="numbox" onKeyUp={(e) => limit(e, 3)} />
      <input type="number" className="numbox" onKeyUp={(e) => limit(e, 4)} />
      <input type="number" className="numbox" onKeyUp={(e) => limit(e, 5)} />
      <input type="number" className="numbox" onKeyUp={(e) => limit(e, 6)} />
      <input type="number" className="specialNumBox" />

      <button className="btn btn1" disabled={playBtn}>
        {" "}
        PLAY{" "}
      </button>
    </div>
  );
};
export default Inputs;
