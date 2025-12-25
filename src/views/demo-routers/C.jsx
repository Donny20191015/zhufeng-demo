import { Outlet, useLocation, useParams } from "react-router-dom";

const C = () => {
    const { id, name } = useParams();
    
    

    return <div>
        <h1>C组件展示</h1>
        <div><span>id: {id}</span></div>
        <div><span>name: {name}</span></div>
    </div>;
}
export default C;