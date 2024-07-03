import React from 'react';
import './App.css';
import ArrowFunctionExample from './ArrowFunctionExample';
import ClassComponentExample from './ClassComponentExample';
import DestructuringExample from './DestructuringExample';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ES6+ Features in React</h1>
      </header>
      <div className="example-container">
        <ArrowFunctionExample />
        <ClassComponentExample />
        <DestructuringExample initialCount={5} /> {/* Pass an initialCount prop */}
      </div>
    </div>
  );
}

export default App;
