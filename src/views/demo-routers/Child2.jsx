import { Outlet, useLocation, useParams } from "react-router-dom";

const Child2 = () => {

    const { id } = useParams();
    const { state } = useLocation();
    console.log("Child2 state: ", state );
    console.log("Child2: ", id );
    

    return <div>
        <h3>Child2</h3>
        {/* <div> */}
            <Outlet></Outlet>
        {/* </div> */}
    </div>;
}
export default Child2;