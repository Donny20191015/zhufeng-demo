import { useState } from "react";
// import Promise from 'promis'


const p = new Promise((resolve, reject) => {
    resolve("hao");
})
p.then((msg) => {
    console.log(msg);
    
})

const DemoUseState = () => {



    let [num, setNum] = useState(0);

    const handle = () => {
        setNum(num + 10);
    }

    return (
        
        <div style={{display: "flex", alignContent: "space-between"}}>
            <span>{num}</span>
            <button onClick={handle}>增加 10</button>
        </div>
    );
}
export default DemoUseState;