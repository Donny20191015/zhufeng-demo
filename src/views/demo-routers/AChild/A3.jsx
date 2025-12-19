import { useLocation } from "react-router-dom";


const A3 = () => {
  const { id, name } = useLocation()?.state;

  return <div>
    <h3>A3组件展示</h3>
    <div><span>id: {id}</span></div>
    <div><span>name: {name}</span></div>
  </div>;
}
export default A3;