import { NavLink } from "react-router-dom";

const HomeHead = () => {
    return <div>
        <NavLink style={ {marginRight: 20}} to="/a">A</NavLink>
        <NavLink style={ {marginRight: 20}} to="/b">B</NavLink>
        <NavLink style={ {marginRight: 20}} to={`/c/${1}/${"lizhang"}`}>C</NavLink>
    </div>
}
export default HomeHead;