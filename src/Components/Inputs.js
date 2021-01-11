import React from "react";
//import "../src/styles.css";

const Inputs = (props) => {

    const inputNumbers = [];

    const limit = (e, key) => {

        if (e.target.value > (key !== 5 ? 69 : 24) || e.target.value === "00") {
            inputNumbers[key] = e.target.value.substr(0, 1);
        } else if (e.target.value.length > 2) {
            inputNumbers[key] = e.target.value.substr(0, 2);
        }


        checkFields()
        props.setUsersNumbers(inputNumbers)
        console.log(e.target.value, key, inputNumbers)

    }

    const checkFields = () => {
        if (Object.values(inputNumbers).every(el => el > 0)) {
            props.setIsEnable(false)
        } else {
            props.setIsEnable(true)
        }
    }

    return (
        <div>
            <form>
                <input value={props.usersNumbers[0]} type="number" className="numbox"
                       onChange={(event) => limit(event, 0)} required/>
                <input value={props.usersNumbers[1]} type="number" className="numbox"
                       onChange={(event) => limit(event, 1)} required/>
                <input value={props.usersNumbers[2]} type="number" className="numbox"
                       onChange={(event) => limit(event, 2)} required/>
                <input value={props.usersNumbers[3]} type="number" className="numbox"
                       onChange={(event) => limit(event, 3)} required/>
                <input value={props.usersNumbers[4]} type="number" className="numbox"
                       onChange={(event) => limit(event, 4)} required/>
                <input value={props.usersNumbers[5]} type="number" className="specialNumBox"
                       onChange={(event) => limit(event, 5)} required/>
                <button className="btn btn1" disabled={props.isEnable}>PLAY</button>
            </form>
        </div>
    );
};
export default Inputs;
