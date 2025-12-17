import { use } from "react";
import { Link, useNavigate } from "react-router-dom";

const Parent = () => {
    const id = 2;
    const navigage = useNavigate();

    const onClickToChild2_1 = () => {
        navigage(`/child2/${id}/child2-1`);
    }

  return <div>
    <h2>Parent</h2>
        <ul>
            <li><Link to="/child1">Child1</Link></li>
            <li><Link to={`/child2/${id}`} state={ {id: 1, name:"haha"} } replace={true}>Child2</Link></li>
        </ul>
        <button onClick={onClickToChild2_1}>to Child2-1</button>
    
  </div>;
}
export default Parent;