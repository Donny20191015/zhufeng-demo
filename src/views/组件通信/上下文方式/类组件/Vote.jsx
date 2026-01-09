import React from "react";
import "./Vote.less";
import VoteMain from "./VoteMain";
import VoteFooter from "./VoteFooter";
// 创建新的ThemeContext对象，并且导入进来
import ThemeContext from "../ThemeContext";

class Vote extends React.Component {
  state = {
    supNum: 10,
    oppNum: 0,
  };

  // 设置为箭头函数：不论方法在哪执行，方法中的this永远都是Vote父组件的实例
  change = (type) => {
    let { supNum, oppNum } = this.state;
    if (type === "sup") {
      this.setState({
        supNum: supNum + 1,
      });
    } else {
      this.setState({
        oppNum: oppNum + 1,
      });
    }
  };

  render() {
    let { supNum, oppNum } = this.state;
    return (
      // 使用ThemeContext.Provider把div中的内容都包裹进来
      // value作为对象传入需要共享的信息
      <ThemeContext.Provider
        value={{
          supNum,
          oppNum,
          change: this.change,
        }}
      >
        <div className="vote-box">
          <div className="header">
            <h2 className="title">React前端框架</h2>
            <span className="num">{supNum + oppNum}</span>
          </div>
          <VoteMain />
          <VoteFooter />
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default Vote;
