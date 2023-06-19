import React from 'react';
import logo from './logo.svg';
import './App.css';
import RoutesComponent from './components/RouteComponent';

const App = () => {
  return (
    <div className="App">
      <header className="Tax-header">
        <main>
          <RoutesComponent />
        </main>
      </header>
    </div>
  );
}

export default App;
