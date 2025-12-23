import { Switch, Redirect, Route } from 'react-router-dom';

// 调用组件的时候，基于属性传递路由表进来，我们根据路由表，动态设定路由的匹配规则
const RouterView = (props) => {
    // 获取传递的路由表
    const {routes} = props;
    console.log(routes);
    // 判空
    if (!routes) return <div>
        No any component!
    </div>

    return <Switch>
        {
            // 循环设置路由匹配规则
            routes.map((item, index) => {
                const { isRedirect, to, from, isExact, path, component: Component } = item;
                let config = { }
                if (isRedirect) {
                    // 重定向的规则
                    config = { to };
                    if (from) config.from = from;
                    if (isExact) config.exact = true;
                    return <Redirect key={index} {...config} />
                }

                // 正常匹配规则
                config = { path };
                if (isExact) config.exact = true;
                return <Route key={index} {...config} render={() => {
                    // 统一基于render函数处理，当某个路由匹配，后期在这里可以做一些其他事情
                    return <Component />;
                }} />
            })
        }
    </Switch>
}
export default RouterView;
