import { useEffect, useRef, useState } from "react";
import React from "react";


let pre1,
    pre2;

const DemoSetRef = () => {
    const [num, setNum] = useState(10);

    const box1 = useRef();
    const box2 = React.createRef();

    if (!pre1) {
        pre1 = box1;
        pre2 = box2
    }

    useEffect(() => {
        console.log("pre1: ", pre1 === box1);
        console.log("pre2: ", pre2 === box2);
    });

    return (
        <div>
            <span ref={box1}></span>
            <span ref={box2}></span>
            <button onClick={() => {
                setNum(100)
            }}>按钮</button>
        </div>
    );
}
export default DemoSetRef;