import { useState } from "react";

const usePartialState = (initialValue) => {
    const [state, setState] = useState(initialValue);

    const setPartialState = (partialState) => {

        setState({
            ...state,
            ...partialState
        })
    }

    return [state, setPartialState];
}

const DemoCustomHook = () => {
    const [state, setPartialState] = usePartialState({
        supNum: 10,
        oppNum: 5
    });

    const handle = (type) => {
        if (type === "sup") {
            setPartialState({
                supNum: state.supNum + 1
            })
        } else {
            setPartialState({
                oppNum: state.oppNum + 1
            })
        }
    }

    return (
        <div>
            <span>支持：{state.supNum} 数</span>
            <span>反对：{state.oppNum} 数</span>
            <br />
            <button onClick={handle.bind(null , "sup")}>支持</button>
            <button onClick={handle.bind(null, "")}>反对</button>
        </div>
    );
}
export default DemoCustomHook;