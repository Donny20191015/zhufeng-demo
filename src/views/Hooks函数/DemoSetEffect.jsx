import { useEffect, useState } from "react";

const fetch = () => {
    return new Promise((reslove) => {
        setTimeout(() => {
            return reslove([10, 20, 30]);
        }, 1000);
    })
}

const DemoSetEffect = () => {
    let [num, setNum] = useState(0);
    let [x, setX] = useState(0);

    useEffect(() => {
        const next = async () => {
            const data = await fetch();
            console.log(data);
        };
        next();
    }, [])

    // useEffect(() => {
    //     console.log("@1", num);
    // })
    // useEffect(() => {
    //     console.log("@2", num);
    // }, [])
    // useEffect(() => {
    //     console.log("@3", num);
    // }, [num])
    // useEffect(() => {
    //     return (() => {
    //         console.log("@4", num);
    //     })
    // }, [num])



    const handle = () =>{
        setNum(num + 1);
    }
    return (
        <div>
            <span>{num}</span>
            <button onClick={handle}>Add</button>
        </div>
    );
}
export default DemoSetEffect;