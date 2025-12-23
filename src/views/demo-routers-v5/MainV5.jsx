import { HashRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import "./MainV5.css"

// 分别导入三个需要显示的组件
import A from "./A";
import B from "./B";
import C from "./C";

const MainV5 = () => {
    return <HashRouter>
        {/* nav为html中的导航标签 */}
        <nav>
            <Link to="/a">A</Link>
            <Link to="/b">B</Link>
            <Link to="/c">C</Link>
        </nav>

        {/* 路由容器：每一次页面加载或者路由切换完毕，都会根据当前的哈希值，到这里和每一个Route进行匹配，
            把匹配到的组件，放在容器中渲染 
        */}
        <div className="content">
            {/* 
                Switch：确保路由中，只要有一项匹配，则不再继续向下匹配
                exact：设置匹配模式为精准匹配
             */}
            <Switch>
                <Redirect from="/" to="/a" exact />
                <Route path="/a" component={ A }></Route>
                <Route path="/b" component={ B }></Route>
                <Route path="/c" component={ C }></Route>
                <Redirect to="/a" />
                {/* // 放在最后一项，path设置*或者不写，意思是：以上都不匹配，则执行这个规则
                <Route path="*" component={ "404组件" }></Route>
                // 当然也可以不设置404组件，而是重定向到默认 / 地址：
                <Redirect from="" to="" exact />
                  + from：从哪个地址来
                  + to：重定向的地址
                  + exact：是对from地址的修饰，开启精准匹配 */}
                {/* <Redirect to="/" /> */}
            </Switch>
        </div>

    </HashRouter>
}
export default MainV5;