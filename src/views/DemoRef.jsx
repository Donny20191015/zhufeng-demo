import React from "react";

class DemoRef extends React.Component {

    
    
    render() {
        
        return (
            <div className="title" ref={x => this.box2 = x}>温馨提示</div>
        );
    }

    componentDidMount() {
        // console.log(document.querySelector(".title"));
        
        console.log(this.box2);
    }
}
export default DemoRef;