import { useState } from "react";

const VoteStatic = (props) => {
    let [supNum, setSupNum] = useState(10);
    let [oppNum, setOppNum] = useState(5);

    let {title } = props;
    // let supNum = 10;
    // let oppNum = 5;

    return (
        <div className="vote-box">
            <div className="header">
                <h2 className="title">{title}</h2>
                <span>{supNum + oppNum}</span>
            </div>
            <div className="main">
                <p>支持人数：{supNum}</p>
                <p>反对人数：{oppNum}</p>
            </div>
            <div className="footer">
                <button onClick={() => {
                    setSupNum(++supNum)
                    console.log(supNum);
                }}>支持</button>
                <button onClick={() => {
                    setOppNum(++oppNum);
                    console.log(oppNum);
                }}>反对</button>
            </div>
        </div>
    );


}

export default VoteStatic;