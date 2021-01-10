import React from "react";
//import "../src/styles.css";

const Inputs = (props) => {

    const inputNumbers = {
        0: props.usersNumbers[0],
        1: props.usersNumbers[1],
        2: props.usersNumbers[2],
        3: props.usersNumbers[3],
        4: props.usersNumbers[4],
        5: props.usersNumbers[5],
        6: props.usersNumbers[6]
    };

    const limit = (e, key) => {
        if (e.target.value > 69 || e.target.value === "00") {
            e.target.value = e.target.value.substr(0, 1);
        } else if (e.target.value.length > 2) {
            e.target.value = e.target.value.substr(0, 2);
        }
        inputNumbers[key] = +e.target.value;
        checkFields();
        console.log(e.target.value, key, props.isEnable, inputNumbers);
    };

    const checkFields = () => {
        if (Object.values(inputNumbers).every(el => el !== 0)) {
            props.setIsEnable(false)
        } else {
            props.setIsEnable(true)
        }
    };

    return (
        <div>
            <form>
                <input value={inputNumbers[0]} type="number" className="numbox" onKeyUp={(e) => limit(e, 0)} required/>
                <input value={inputNumbers[1]} type="number" className="numbox" onKeyUp={(e) => limit(e, 1)} required/>
                <input value={inputNumbers[2]} type="number" className="numbox" onKeyUp={(e) => limit(e, 2)} required/>
                <input value={inputNumbers[3]} type="number" className="numbox" onKeyUp={(e) => limit(e, 3)} required/>
                <input value={inputNumbers[4]} type="number" className="numbox" onKeyUp={(e) => limit(e, 4)} required/>
                <input value={inputNumbers[5]} type="number" className="numbox" onKeyUp={(e) => limit(e, 5)} required/>
                <input value={inputNumbers[6]} type="number" className="specialNumBox" onKeyUp={(e) => limit(e, 6)}/>
                <button className="btn btn1" disabled={props.isEnable}>PLAY</button>
            </form>
        </div>
    );
};
export default Inputs;
