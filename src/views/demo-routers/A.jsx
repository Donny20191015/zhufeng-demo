import {  } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const A = () => {
  const navigate = useNavigate();

  const onClickJumpToA3 = () => {
    navigate("/a/a3", {state: {id:1, name:"Zhangfei"}});
  }

  return <div>
    <h1>A组件展示</h1>

    <NavLink to="/a/a1"><h2>A1组件展示</h2></NavLink>
    <NavLink to="/a/a2"><h2>A2组件展示</h2></NavLink>
    <button onClick={onClickJumpToA3}><h2>A3组件展示</h2></button>
  </div>;
}
export default A;