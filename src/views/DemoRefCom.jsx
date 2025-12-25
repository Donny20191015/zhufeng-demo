import React from "react";

class DemoRefCom extends React.Component {
    render() {
        return (
            <>
                <Child1 ref={x=>this.child1=x}></Child1>
                <Child2 ref={x=>this.child2=x}></Child2>
            </>
        );
    }

    componentDidMount() {
        console.log("child1:", this.child1.childEm);
        console.log("child2:", this.child2);
    }
}
export default DemoRefCom;

class Child1 extends React.Component {
    
    render() {
        return (
            <div>
                <em ref={x=>this.childEm=x}>1000</em>
                我是Child1
            </div>
        );
    }
    componentDidMount() {
        console.log(this.ref);
        
    }
}

const Child2 = React.forwardRef((props, ref) => {
    console.log(this);
    

    return (
        <div>
            <em ref={ref}>500</em>
            我是Child2
        </div>
    );
});