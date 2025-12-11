import React from "react";

class DemoSetState extends React.Component {
    state = {
        x: 0
    }
    
    handle = () => {
        for (let i = 0; i < 20; i++) {
            // this.setState({
            //     x: this.state.x + 1
            // });

            this.setState((preState) => {
                return ({
                    x: preState.x + 1
                })
            });
        }
    }

    render() {
        let { x } = this.state;
        console.log("render()");
        
        return (
            <>
                <div>{x}</div>
                <button onClick={this.handle}>计算</button>
            </>
        );
    }
}
export default DemoSetState;