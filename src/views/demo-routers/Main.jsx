import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import A from "./A";
import A1 from "./AChild/A1";
import A2 from "./AChild/A2";
import A3 from "./AChild/A3";
import B from "./B";
import C from "./C";
import HomeHead from './HomeHead';

const Main = () => {
    // console.log(Navigate);
    
    return (
        <>
            <Router>
                {/* HomeHead必须放到Router内部，不然会报错 
                    HomeHead存放着主菜单A B C
                */}
                <HomeHead></HomeHead>
                {/* 分为A/B/C三个主菜单，其中A中有A1/A2/A3三个子菜单 */}
                <Routes>
                    <Route path="/" element={ <Navigate to="/a" /> } />
                    <Route path="/a" element={ <A />} />
                        <Route path="/a" element={ <Navigate to="/a/a1" /> }></Route>
                        <Route path="/a/a1" element={ <A1 />}></Route>
                        <Route path="/a/a2" element={ <A2 />}></Route>
                        <Route path="/a/a3" element={ <A3 />}></Route>
                        <Route path="*" element={ <Navigate to="/a/a1" /> }></Route>
                    <Route path="/b" element={ <B />} />
                    <Route path="/c/:id/:name" element={ <C />} />
                    <Route path="*" element={ <Navigate to="/a" /> }></Route>
                </Routes>
            </Router>
        </>
    );
}
export default Main;