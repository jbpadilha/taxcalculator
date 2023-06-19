import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Main = React.lazy(() => import('./Main'));

const RoutesComponent = () => {
    return (
        <Router>
        <Routes>
            <Route path={"/"} element={<Main />} />
            <Route path="*" element={<Main />} />
            </Routes>
        </Router>
    );
}

export default RoutesComponent;