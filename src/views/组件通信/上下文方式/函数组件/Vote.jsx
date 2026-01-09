import { useCallback, useState } from "react";
import "./Vote.less";
import VoteMain from "./VoteMain";
import VoteFooter from "./VoteFooter";
import ThemeContext from "../ThemeContext";

const Vote = () => {
  const [supNum, setSupNum] = useState(10);
  const [oppNum, setOppNum] = useState(0);

  // 使用useCallback来确保始终都是同一个函数，不会在每次更新的时候重新创建新的函数
  // 由于此视图中只有supNum和oppNum，所以每次更新的时候change都是需要更新的，因此不需要使用useCallback
  const change = useCallback(
    (type) => {
      if (type === "sup") {
        setSupNum(supNum + 1);
      } else {
        setOppNum(oppNum + 1);
      }
    },
    [supNum, oppNum]
  );

  return (
    <ThemeContext.Provider
      value={{
        supNum,
        oppNum,
        change,
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
};

export default Vote;
