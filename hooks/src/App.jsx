import React from 'react';
import UseStateExample from './UseStateExample';
import UseEffectExample from './UseEffectExample';
import UseContextExample from './UseContextExample';
import UseReducerExample from './UseReducerExample';
import UseRefExample from './UseRefExample';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="example-container">
        <header className="App-header">
          <h1>React Hooks Examples</h1>
        </header>
        <UseStateExample className="bg1" />
        <UseEffectExample className="bg2" />
        <UseContextExample className="bg3" />
        <UseReducerExample className="bg4" />
        <UseRefExample className="bg5" />
      </div>
    </div>
  );
}

export default App;
