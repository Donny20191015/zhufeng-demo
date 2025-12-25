import { lazy } from "react";

// import A1 from '../a/A1';
// import A2 from '../a/A2';
// import A3 from '../a/A3';

const ARoutes = [{
    isRedirect: true,
    from: "/a",
    to: "/a/a1",
    isExact: true,
    name: "",
    meta: {}
},
{
    isRedirect: false,
    path: "/a/a1",
    component: lazy(() => import(/* webpackChunkName:"AChild" */ '../a/A1')),
    name: "",
    meta: {}
},
{
    isRedirect: false,
    path: "/a/a2",
    component: lazy(() => import(/* webpackChunkName:"AChild" */ "../a/A2")),
    name: "",
    meta: {}
},
{
    isRedirect: false,
    path: "/a/a3",
    component: lazy(() => import(/* webpackChunkName:"AChild" */ "../a/A3")),
    name: "",
    meta: {}
}
];

export default ARoutes;