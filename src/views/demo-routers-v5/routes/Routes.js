/* 
    配置路由表：数组，数组中每一项就是每一个需要配置的路由规则
        + redirect：true 此配置是重定向
        + from：来源的地址
        + to：重定向的地址
        + exact：是否精准匹配
        + path：匹配的路径
        + component：渲染的组件
        + name：路由名称（命名路由）
        + meta：{} 路由元信息【包含当前路由的一些信息，当路由匹配后，我们可以拿这些信息做一些事情...】
        + children：[] 子路由
        + ...
*/

// 实现懒加载
import { lazy } from 'react';
import A from '../A';
// import B from '../B';
// import C from '../C';

// 一级路由的路由表
const Routes = [{
    isRedirect: true,
    from: "/",
    to: "/a",
    isExact: true,
    name: "",
    meta: {}
},
{
    path: "/a",
    component: A,
    children: {},
    name: "",
    meta: {}
},
{
    path: "/b",
    component: lazy(() => import(/* webpackChunkName:"B-C-Child" */ '../B')),
    name: "",
    meta: {}
},
{
    path: "/c",
    component: lazy(() => import(/* webpackChunkName:"B-C-Child" */ '../C')),
    name: "",
    meta: {}
}
];

export default Routes;