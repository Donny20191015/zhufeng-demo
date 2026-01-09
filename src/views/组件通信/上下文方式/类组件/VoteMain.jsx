import React from "react";
import PropTypes from "prop-types";
// 导入ThemeContext
import ThemeContext from "../ThemeContext";

class VoteMain extends React.Component {
  // 第一种方法：静态变量拿到ThemeContext对象，固定语法如下
  static contextType = ThemeContext;

  /* 使用上下文方式，原先的校验方式不行，怎么做属性校验？
  // 属性规则校验
  static defaultProps = {
    supNum: 0,
    oppNum: 0,
  };
  static propTypes = {
    supNum: PropTypes.number,
    oppNum: PropTypes.number,
  }; */
  render() {
    // 从静态变量中拿到支持/反对数据
    let { supNum, oppNum } = this.context;

    const total = supNum + oppNum;
    const ratio = total > 0 ? ((supNum / total) * 100).toFixed(2) + "%" : "--";
    return (
      <div className="main">
        <p>支持人数：{supNum}人</p>
        <p>反对人数：{oppNum}人</p>
        <p>支持比率：{ratio}</p>
      </div>
    );
  }
}
export default VoteMain;
