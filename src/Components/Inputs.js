import React from "react";


const Inputs = (props) => {


        const generator = () => {

            props.setCounter({
                ...props.counter,
                playedTimes: props.counter.playedTimes + 1
            })

            let user = [...props.usersNumbers];
            user.sort((a, b) => {
                if (user.indexOf(a) === 5) return 0
                else return a - b
            })
            user = [...new Set(user)];
            props.setUsersNumbers(user.map(num => String(num).length < 2 ? '0' + num : num))


            let comp = [];
            for (let i = 0; i < 25; i++) {
                let rand1 = Math.floor(Math.random() * 68 + 1);
                if (!comp.includes(rand1)) {
                    comp.push(rand1);
                }
            }
            comp = [...new Set(comp)];
            comp.length = 5;
            comp.sort((a, b) => a - b).push(Math.ceil(Math.random() * 24))

            props.setWinningNumbers(comp.map(num => +num < 10 ? '0' + num : num))
            sameNum(user, comp);


            checkMax()
        }

    const sameNum = (arr1, arr2) => {
        props.setSameNumber(arr1.map((num, i) => arr2.includes(num) && i !== 5 ? num :
            arr2.includes(num) && i === 5 ? '*' + num + '*' : ''))
    }
    const checkMax = () => {

        if (props.counter.maxSameNum.filter(el => el).length <= props.sameNumber.filter(el => el).length) {
            props.setCounter({
                ...props.counter,
                maxSameNum: props.sameNumber
            })
        }
    }

    const inputNumbers = [...props.usersNumbers];

const limit = (e, key) => {
  const value = +e.target.value;

  if (value > (key !== 5 ? 69 : 24) || value === "00") {
    inputNumbers[key] = +e.target.value.substr(0, 1);
  } else if (e.target.value.length > 2) {
    inputNumbers[key] = +e.target.value.substr(0, 2);
  }

  checkFields();
  props.setUsersNumbers(inputNumbers);
};

        const checkFields = () => {
            if (Object.values(inputNumbers).every(el => +el > 0)) {
                props.setIsEnable(false)
            } else {
                props.setIsEnable(true)
            }
        }

        return (
            <div className="input-form">
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
                </form>
                <button className="btn btn1" onClick={generator} disabled={props.isEnable}>PLAY</button>
                {/* <button className="btn btn5" disabled={props.isEnable}>Clear</button> */}
            </div>
        );
    }
;
export default Inputs;
