import React from 'react';
import logo from './logo.svg';
import './App.css';
import RoutesComponent from './components/RouteComponent';

const App = () => {
  return (
    <div className="App">
      <header className="Tax-header">
        <img src={logo} className="Tax-logo" alt="logo" />
        <div>
          <RoutesComponent />
        </div>
      </header>
    </div>
  );
}

export default App;
