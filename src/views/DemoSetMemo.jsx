import { useMemo, useState } from "react";

let preFunc;
const DemoSetMemo = () => {
    const [num, setNum] = useState(0);

    // 使用 setMemo 出来复杂的计算处理
    const complexCalculation = (num) => {
        console.log("Here is very complex calculation process!");
    }
    useMemo(complexCalculation);

    if (!preFunc) {
        preFunc = complexCalculation;
    } else {
        
    }

    return (
        <div>
            <span>{num}</span>
            <button onClick={() => setNum(num + 1)}>Add</button>
        </div>
    )
}
export default DemoSetMemo;