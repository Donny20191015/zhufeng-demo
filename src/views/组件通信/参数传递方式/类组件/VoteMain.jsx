import React from "react";
import PropTypes from "prop-types";

class VoteMain extends React.Component {
  /* 属性规则校验 */
  static defaultProps = {
    supNum: 0,
    oppNum: 0,
  };
  static propTypes = {
    supNum: PropTypes.number,
    oppNum: PropTypes.number,
  };
  render() {
    const { supNum, oppNum } = this.props;
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
