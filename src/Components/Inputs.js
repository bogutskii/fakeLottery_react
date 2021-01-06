import React from "react";
//import "../src/styles.css";

const Inputs = (props) => {

  const inputNumbers = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0
  };

  const limit = (e, key) => {
    if (e.target.value > 69 || e.target.value === "00") {
      e.target.value = e.target.value.substr(0, 1);
    } else if (e.target.value.length > 2) {
      e.target.value = e.target.value.substr(0, 2);
    }
    inputNumbers[key] = +e.target.value;
    checkFields();
    console.log(e.target.value, key,props.isEnable, inputNumbers);
  };

  const checkFields = () => {
   if(Object.values(inputNumbers).every(el=>el !== 0)){
       props.setIsEnable(false)
   }else{
       props.setIsEnable(true)
   }
  };

  return (
    <div>
        <form>

      <input type="number" className="numbox" onKeyUp={(e) => limit(e, 0)} required />
      <input type="number" className="numbox" onKeyUp={(e) => limit(e, 1)} required/>
      <input type="number" className="numbox" onKeyUp={(e) => limit(e, 2)} required/>
      <input type="number" className="numbox" onKeyUp={(e) => limit(e, 3)} required/>
      <input type="number" className="numbox" onKeyUp={(e) => limit(e, 4)} required/>
      <input type="number" className="numbox" onKeyUp={(e) => limit(e, 5)} required/>
      <input type="number" className="specialNumBox" onKeyUp={(e) => limit(e, 6)} />

            <button   className="btn btn1" disabled={props.isEnable}  >PLAY</button>


        </form>

    </div>
  );
};
export default Inputs;
