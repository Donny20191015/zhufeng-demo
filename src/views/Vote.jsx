import React from 'react';
import PropTypes from 'prop-types'

class Vote extends React.Component {
    static defaultProps = {
        title: "Hello!"
    }

    static propTypes = {
        title: PropTypes.string.isRequired
    }

    // constructor(props) {
    //     super(props);
    //     console.log(this.props);
        
    // }

    state = {
        supNum: 20,
        oppNum: 10
    }

    UNSAFE_componentWillMount() {
        console.log("componentWillMount: 在render()之前运行");
    }
    componentDidMount() {
        console.log("componentDidMount: 在render()之后运行");    
    }

    render() {
        console.log("render: render()运行");    

        let { title } = this.props;
        let { supNum, oppNum } = this.state;
        return (
        <div className="vote-box">
            <div className="header">
                <h2 className="title">{title}</h2>
                <span>{supNum + oppNum}</span>
            </div>
            <div className="main">
                <p>支持人数：{supNum}</p>
                <p>反对人数：{oppNum}</p>
            </div>
            <div className="footer">
                <button onClick={() => {
                    this.setState({
                        supNum: supNum + 1
                    });
                }}>支持</button>
                <button onClick={() => {
                    this.state.oppNum++;
                    this.forceUpdate();
                    // this.setState({
                    //     oppNum: oppNum + 1
                    // });
                }}>反对</button>
            </div>
        </div>
        );
    }

    UNSAFE_componentWillReceiveProps(nextProps, nextState) {
        console.log("UNSAFE_componentWillReceiveProps：父组件更新后，回传到子组件后触发此函数");    
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate: 当交互发生时之前，返回bool值确定是否需要更新视图", this.state, nextState);    
        return true;
    }
    // getSnapshotBeforeUpdate(prevProp, prevState) {
    //     console.log("getSnapshotBeforeUpdate: 当交互发生后[render()]会触发， ", this.state, prevState);    

    // }
    UNSAFE_componentWillUpdate(nextProps, nextState) {
        console.log("componentWillUpdate: 这个周期函数执行结束后，将会更新视图[render()]", this.state, nextState);    
    }
    componentDidUpdate() {
        console.log("componentDidUpdate：视图更新后[render()]");    
    }

    componentWillUnmount() {
        console.log("componentWillUnmount：销毁组件的时候触发此函数");
        
    }
}
export default Vote;

// class Parent {
//     // constructor() {}
//     num = 100;
//     getSum = () => {
//         console.log("getSum");
//     }

//     // prototype上的function,
//     // 只能对象拿到这个方法，类本身不能拿到
//     sum(shuzi) {  
//         // console.log("num");
//         console.log(shuzi++);
        
//     }
//     static average() {
//         console.log("average");
//     }
// }

// let p = new Parent();
// let p2 = new Parent();
// p.getSum();
// p.sum(1); 
// p2.sum(2); 
// Parent.average()
// // console.log(p);
