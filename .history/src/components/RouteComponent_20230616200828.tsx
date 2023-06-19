import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Main = React.lazy(() => import('./Main'));
const ResultTax = React.lazy(() => import('./ResultTax'));

const RoutesComponent = () => {
    return (
        <Router>
            <Routes>
                <Route path={"/"} element={<Main />} />
                <Route path={"/results"} element={<ResultTax />} />
                <Route path="*" element={<Main />} />
            </Routes>
        </Router>
    );
}

export default RoutesComponent;