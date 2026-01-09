import { Button } from "antd";
import { PureComponent } from "react";
import PropTypes from "prop-types";
// 导入ThemeContext
import ThemeContext from "../ThemeContext";

/* 当每次支持/反对的票数被改变的时候，VoteMain需要重新渲染，显示出最新的数据，
    但是VoteFooter是不需要重新渲染的，因为change方法是没有改变过的，为了避免
    始终是重新渲染VoteFooter，因此改继承PureComponent而不用Component
*/
class VoteFooter extends PureComponent {
  /* 使用上下文方式，原先的校验方式不行，怎么做属性校验？
  // 属性规则校验
  static defaultProps = {};
  static propTypes = {
    change: PropTypes.func.isRequired,
  }; */

  render() {
    return (
      <ThemeContext.Consumer>
        {(context) => {
          let { change } = context;
          return (
            <div className="footer">
              <Button type="primary" onClick={change.bind(null, "sup")}>
                支持
              </Button>
              <Button type="primary" danger onClick={change.bind(null, "opp")}>
                反对
              </Button>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default VoteFooter;
