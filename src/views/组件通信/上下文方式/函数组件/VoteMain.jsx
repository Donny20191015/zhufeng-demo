import PropTypes from "prop-types";
import { useContext, useMemo } from "react";
import ThemeContext from "../ThemeContext";

const VoteMain = () => {
  const { supNum, oppNum } = useContext(ThemeContext);

  const total = supNum + oppNum;

  // 基于useMemo实现复杂函数的“计算缓存”
  const ratio = useMemo(() => {
    return total > 0 ? ((supNum / total) * 100).toFixed(2) + "%" : "--";
  });

  return (
    <div className="main">
      <p>支持人数：{supNum}人</p>
      <p>反对人数：{oppNum}人</p>
      <p>支持比率：{ratio}</p>
    </div>
  );
};
export default VoteMain;

/* // 属性规则校验
VoteMain.defaultProps = {
  supNum: 0,
  oppNum: 0,
};
VoteMain.propTypes = {
  supNum: PropTypes.number,
  oppNum: PropTypes.number,
}; */
