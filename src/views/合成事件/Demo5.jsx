import React from "react";

/* 解决移动端click会存在300ms延迟的问题
    自己写touchStart/touchMove/touchEnd来解决
*/
class Demo5 extends React.Component {

    // 手指按下：记录手指的起始坐标
    touchStart = (ev) => {
        let figer = ev.changedTouches[0];   // 记录了操作手指的相关信息
        this.touch = {
            startX: figer.pageX,
            startY: figer.pageY,
            isMove: false
        };
    };

    // 手指移动：记录手指偏移值，和误差值做对比，分析出是否发送移动
    touchMove = (ev) => {
        let figer = ev.changedTouches[0],
            { startX, startY } = this.touch;
        let changeX = figer.pageX - startX,
            changeY = figer.pageY - startY;

        if (Math.abs(changeX) > 0 || Math.abs(changeY) > 0) {
            this.touch.isMove = true;
        }
    };

    // 手指离开：根据isMove判断是否是点击
    touchEnd = () => {
        let { isMove } = this.touch;
        if (isMove) return;
        // 说明触发了点击操作
        console.log('点击了按钮');
    }

    render() {
        return <div>
            <button onTouchStart={this.touchStart}
                onTouchMove={this.touchMove}
                onTouchEnd={this.touchEnd}
            >提交</button>
        </div>
    }
 }
export default Demo5;