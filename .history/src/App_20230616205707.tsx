import React from 'react';
import logo from './logo.svg';
import './App.css';
import RoutesComponent from './components/RouteComponent';

const App = () => {
  return (
    <div className="App">
      <header className="Tax-header">

      </header>
      <main>
        <RoutesComponent />
      </main>
      <footer>
        <div>Footer</div>
      </footer>
    </div>
  );
}

export default App;
