import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Parent from './Parent';
import Child1 from './Child1';
import Child2 from './Child2';
import Child2_1 from './Child2-1';

const Main = () => {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={ <Navigate to="/" replace />} />
                <Route path="/" element={ <Parent />} />
                <Route path="/child1" element={ <Child1 />} />
                <Route path="/child2/:id" element={ <Child2 />} >
                    <Route path="child2-1" element={ <Child2_1 /> } />
                </Route>
                <Route path="*" element={ <Navigate to="/" replace />} />
            </Routes>
        </Router>
    );
}
export default Main;