import { Link, Switch, Redirect, Route } from 'react-router-dom';
import './A.css';

import A1 from './a/A1';
import A2 from './a/A2';
import A3 from './a/A3';

const A = () => {
    return <div className='a-box'>
        A组件显示
        {/* A组件中的子组件导航 */}
        <nav className='a-nav'>
            <Link to="/a/a1">A1</Link>
            <Link to="/a/a2">A2</Link>
            <Link to="/a/a3">A3</Link>
        </nav>

        <div className='a-content'>
            {/* 配置二级路由的匹配规则：需要把一级路由地址带上，不能省略 */}
            <Switch>
                <Redirect from="/a" to="/a/a1" exact />
                <Route path="/a/a1" component={A1} />
                <Route path="/a/a2" component={A2} />
                <Route path="/a/a3" component={A3} />
            </Switch>
        </div>
    </div>
}
export default A;