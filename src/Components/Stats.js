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
                        <span
                            className={`${!num ? '' : props.winningNumbers.includes(num) ? 'white-cir' : 'gray-cir'}`}>{num}</span>
                        :
                        <span
                            className={`${!num ? '' : props.winningNumbers[5] === props.userNumbers[5] ? 'redWin-cir' : 'red-cir'}`}>{num}</span>
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
                    <td>{props.sameNumber



                        .map(num => !num ? '' : String(num).length <= 2 ?  <span className="white-cir">{num}</span>
                            :
                            <span className="red-cir">{String(num).slice(1,-1)}</span>
                        )
                    }
                    </td>
                </tr>
                <tr>
                    <td>total played</td>
                    <td>{props.counter.playedTimes}  <button className="btn5-mini">reset</button></td>
                </tr>
                </tbody>
            </table>
        </div>
)
}
export default Stats;