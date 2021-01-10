import React from 'react';



const GeneratorRandomNumber = (props) => {
    const generator = () => {
        let win = [];

        for (let i = 0; i < 25; i++) {
            let rand1 = Math.floor(Math.random() * 68 + 1);
            if (!win.includes(rand1)) {
                win.push(rand1);
            }
        }
        win = [...new Set(win)];
        win.length = 5;
        win.sort((a, b) => a - b).push(Math.floor(Math.random() * 24));
//props.setUsersNumbers()
console.log(win)
       props.setUsersNumbers(win)
    }


    return (
        <div>
            <button className="btn btn3" onClick={generator}>Random</button>

        </div>

    )
}
export default GeneratorRandomNumber;