import React from 'react';


const Stats = (props) => {

    return (
        <div>
            <h1>Stats</h1>
            <table className="center">
                <tbody>
                <tr>
                    <td>User number</td>
                    <td>{props.userNumbers.map((num, i) => i !== 5 ?
                        <span className="white-cir">{num}</span>
                        :
                        <span className="red-cir">{num}</span>
                    )

                    }</td>
                </tr>

                <tr>
                    <td>Win number</td>
                    <td>{props.winningNumbers.map((num, i) => i !== 5 ?
                        <span className="white-cir">{num}</span>
                        :
                        <span className="red-cir">{num}</span>
                    )}</td>
                </tr>
                <tr>
                    <td>Same number</td>
                    <td>0</td>
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