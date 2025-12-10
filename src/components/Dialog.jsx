import React from "react";

const Dialog = (props) => {
    let { title, content, children } = props;
    children = React.Children.toArray(children);
    return (
        <div className="dialog-box" style={{width: 300}}>
            <div className="header" style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <h2 className="title">{title}</h2>
                <span>X</span>
            </div>
            <div className="main">
                {content}
            </div>
            { 
                children.length > 0 ? <div className="footer">{children}</div> : null
            }
        </div>
    );
}

export default Dialog;