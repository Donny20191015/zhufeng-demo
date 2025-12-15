import { useMemo, useState } from "react";

let preFunc;
const DemoSetMemo = () => {
    const [oppNum, setOopNum] = useState(5);
    const [supNum, setSupNum] = useState(10);
    const [other, setOther] = useState(0);

    let ratio = useMemo(()=> {
        return (supNum / (oppNum + supNum)).toFixed(2);
    }, [supNum, oppNum])

    // 使用 setMemo 出来复杂的计算处理
    const complexCalculation = (num) => {
        console.log("Here is very complex calculation process!");
    }

    if (!preFunc) {
        preFunc = complexCalculation;
    } else {
        
    }

    return (
        <div>
            <span>支持：{supNum} 数</span>
            <span>反对：{oppNum} 数</span>
            <span>支持率：{ratio} %</span>
            <br />
            <button onClick={() => setSupNum(supNum + 1)}>支持</button>
            <button onClick={() => setOopNum(oppNum + 1)}>反对</button>
            <button onClick={() => setOther(other + 1)}>做的其他的事</button>
        </div>
    )
}
export default DemoSetMemo;