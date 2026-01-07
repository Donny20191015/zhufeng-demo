import React from "react";

/* React(18/16)中合成事件的处理原理 */
class Demo4 extends React.Component {
    render() {
        return <div className="outer"
            onClick={() => {
                console.log('outer 冒泡【合成】');
            }}
            onClickCapture={() => {
                console.log('outer 捕获【合成】');
            }}>
            <div className="inner" 
                onClick={() => {
                console.log('inner 冒泡【合成】');
            }}
                onClickCapture={() => {
                console.log('inner 捕获【合成】');
            }}>
            </div>
        </div>
    }

    componentDidMount() {
        
        document.addEventListener('click', () => {
            console.log('Demo4.jsx 的事件执行顺序如下：');
            console.log('document 捕获');
        }, true);
        document.addEventListener('click', () => {
            console.log('document 冒泡');
        }, false);

        document.body.addEventListener('click', () => {
            console.log('body 捕获');
        }, true);
        document.body.addEventListener('click', () => {
            console.log('body 冒泡');
        }, false);

        let root = document.getElementById('root');
        root.addEventListener('click', () => {
            console.log('root 捕获');
        }, true);
        root.addEventListener('click', () => {
            console.log('root 冒泡');
        }, false);

        let outer = document.querySelector('.outer');
        outer.addEventListener('click', () => {
            console.log('outer 捕获【原生】');
        }, true);
        outer.addEventListener('click', () => {
            console.log('outer 冒泡【原生】');
        }, false);

        let inner = document.querySelector('.inner');
        inner.addEventListener('click', () => {
            console.log('inner 捕获【原生】');
        }, true);
        inner.addEventListener('click', () => {
            console.log('inner 冒泡【原生】');
        }, false);
    }
}

export default Demo4;