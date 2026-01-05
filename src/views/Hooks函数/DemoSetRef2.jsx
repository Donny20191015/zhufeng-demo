
import React, { useEffect, useImperativeHandle, useRef } from 'react';


const DemosetRef2 = () => {
    const child1 = useRef();
    const child2 = useRef();

    useEffect(() => {
        // console.log(child1.current);
        console.log(child2); 
    });

    return (
        <div>
            {/* <Child1 ref={child1}></Child1> */}
            <Child2 ref={child2}></Child2>
        </div>

    );
}
export default DemosetRef2;

class Child1 extends React.Component {
    state = {
        x: 1000
    }

    render() { 

        return (
            <div>
                <span>{this.state.x}</span>
            </div>
        );
    }

}

const Child2 = React.forwardRef((props, ref) => {
    const [num, setNum] = React.useState(2000);
    const submit = () => {
        console.log("submit");
    }

    useImperativeHandle(ref, () => {
        return {
            num,
            submit
        }
    });

    return (
        <div ref={ref}>
            <span ref={ref}>hahaha</span>
        </div>
    );
});