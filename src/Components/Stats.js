import React from 'react';


const Stats = (props) => {

    // const filterSameNumber = () => {
    //     props.setSameNumber(props.usersNumbers.filter(el => props.winningNumbers.includes(el)))
    //     console.log('yes')
    // }


    return (
        <div>
            <h1>Stats</h1>
            <table className="center">
                <tbody>
                <tr>
                    <td>User number</td>
                    <td>{props.userNumbers.map((num, i) => i !== 5 ?
                        <span className={`${props.winningNumbers.includes(num) ?'white-cir':'gray-cir'}`}>{num}</span>
                        :
                        <span className={`${props.winningNumbers[5]===props.userNumbers[5] ?'redWin-cir':'red-cir'}`}>{num}</span>
                    )

                    }</td>
                </tr>

                <tr>
                    <td>Win number</td>
                    <td>{props.winningNumbers.map((num, i) => i !== 5 ?
                        <span className="gray-cir">{num}</span>
                        :
                        <span className="red-cir">{num}</span>
                    )}</td>
                </tr>
                <tr>
                    <td>Same number</td>
                    <td>{props.sameNumber}</td>
                </tr>
                <tr>
                    <td>total win</td>
                    <td>0</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Stats;