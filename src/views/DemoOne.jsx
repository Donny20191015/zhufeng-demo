import PropTypes from 'prop-types'
import React from 'react'
console.log(PropTypes);

const DemoOne = (props) => {
    console.log(props);
    let { title, x, children } = props;
    children = React.Children.toArray(children);
    let headerSlot = [];
    let footerSlot = [];
    let defaultSlot = [];

    children.forEach( (child) => {
        let { slot } = child.props;

        if (slot === "header") {
            headerSlot.push(child);
        } else if (slot === "footer") {
            footerSlot.push(child);
        } else {
            defaultSlot.push(child);
        }
    });

    return (
        <div className='demo-box'>
            {headerSlot}
            <br />

            <h2 className='title'>{title}</h2>
            {defaultSlot}
            <span>{x}</span>

            <br />
            {footerSlot}
        </div>
    )
}

DemoOne.defaultProps = {
    x: 0
}
DemoOne.propTypes = {
    title: PropTypes.string.isRequired,
    x: PropTypes.number
}

export default DemoOne;


