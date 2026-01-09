import { Button } from "antd";
import PropTypes from "prop-types";
import { memo } from "react";

const VoteFooter = (props) => {
  let { change } = props;
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
};
// memo函数会对props做浅比较，如果props值未改变，则不会重新渲染
export default memo(VoteFooter);

/* 属性规则校验 */
VoteFooter.propTypes = {
  change: PropTypes.func.isRequired,
};
