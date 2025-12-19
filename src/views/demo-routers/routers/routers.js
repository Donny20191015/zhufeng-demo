import A from "../A"
import B from "../B"
import C from "../C"

export const Routers = [
    {
        path: "/a",
        component: A,
        children: {}
    },
    {
        path: "/b",
        component: B,
        children: {}
    },
    {
        path: "/c",
        component: C,
        children: {}
    }
]

const ARouters = [
    {
        path: "/a/a1",
        component: A,
        children: {}
    }, 
]