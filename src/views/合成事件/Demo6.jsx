import React from "react";

/* 解决移动端click会存在300ms延迟的问题
    可以使用FastClick来解决移动端点击延迟300ms的问题
    FastClick写在入口处main.jsx[vite项目]/index.jsx[webpack项目]
*/
class Demo6 extends React.Component {

    handle = () => {
        console.log('点击了按钮');
    }

    render() {
        return <div>
                <button onClick={this.handle}
            >提交</button>
        </div>
    }
 }
export default Demo6;