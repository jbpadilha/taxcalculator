import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const TaxCalculator = React.lazy(() => import('./TaxCalculator'));

const RoutesComponent = () => {
    return (
        <Router>
        <Routes>
            <Route path={"/"} element={<TaxCalculator />} />
            <Route path="*" element={<TaxCalculator />} />
            </Routes>
        </Router>
    );
}

export default RoutesComponent;