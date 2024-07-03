# React Hooks Examples

This repository contains examples demonstrating the use of major React hooks in functional components.

## Hooks Covered

- `useState`: Manage state in functional components.
- `useEffect`: Perform side effects in functional components.
- `useContext`: Access context values in functional components.
- `useReducer`: Manage complex state logic in functional components.
- `useRef`: Persist values and access DOM elements in functional components.

## Getting Started

1. Clone this repository.
2. Navigate to the project directory.

# React Hooks Examples

This repository contains examples demonstrating the use of React hooks, leveraging modern JavaScript (ES6+) features.

## useState Hook

The `useState` hook allows functional components in React to manage local state. It returns a stateful value and a function to update it.

**File:** `UseStateExample.jsx`
```jsx
import React, { useState } from 'react';

const UseStateExample = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(newTasks);
  };

  return (
    <div className="todo-container bg1">
      <h1>To-Do List</h1>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Add a new task" 
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} >
            {task} <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseStateExample;

```

## useEffect Hook

The `useEffect` hook is used for performing side effects in functional components. It runs after every render and can perform data fetching, subscriptions, or manually changing the DOM.

**File:** `UseEffectExample.jsx`
```jsx
import React, { useState, useEffect } from 'react';

const UseEffectExample = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setData(data));
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div className='bg2'>
      <h1>Fetched Data</h1>
      <ul>
        {data.slice(0, 5).map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseEffectExample;

```

## useContext Hook

The `useContext` hook allows functional components to consume context that has been established by a `Provider` higher up in the component tree.

**File:** `UseContextExample.jsx`
```jsx
import React, { useContext, useState, createContext } from 'react';

const ThemeContext = createContext();

const UseContextExample = () => {
  const theme = useContext(ThemeContext);

  return (
    <div style={{ background: theme.background, color: theme.color }} className='bg2'>
      <h2>useContext Example</h2>
      <p>The current theme is: {theme.name}</p>
    </div>
  );
};

const AppWithContext = () => {
  const [theme, setTheme] = useState({
    name: 'Light',
    background: '#ffffff',
    color: '#000000',
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => ({
      name: prevTheme.name === 'Light' ? 'Dark' : 'Light',
      background: prevTheme.background === '#ffffff' ? '#000000' : '#ffffff',
      color: prevTheme.color === '#000000' ? '#ffffff' : '#000000',
    }));
  };

  return (
    <ThemeContext.Provider value={theme}>
      <button onClick={toggleTheme} className='bg2'>Toggle Theme</button>
      <UseContextExample />
    </ThemeContext.Provider>
  );
};

export default AppWithContext;

```

## useReducer Hook

The `useReducer` hook is used as an alternative to `useState` to manage state in complex scenarios. It accepts a reducer function with the current state and an action to update state.

**File:** `UseReducerExample.jsx`
```jsx
import React, { useReducer } from 'react';
import './App.css';
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="bg4">
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
};

export default UseReducerExample;

```

## useRef Hook

The `useRef` hook returns a mutable ref object whose `.current` property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.

**File:** `UseRefExample.jsx`
```jsx
import React, { useRef } from 'react';

const UseRefExample = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div className='bg5'>
      <h1>useRef Example</h1>
      <input ref={inputRef} type="text" placeholder="Focus on me!" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default UseRefExample;

```
---

## State Management in React

React uses state to manage data that changes over time within a component. State allows components to update and render dynamically based on user interactions or other dynamic events.

### Using State in Functional Components
- Before React Hooks, state was managed in class components using `this.state` and `this.setState`.
- `useState` hook introduced in React 16.8 allows functional components to manage local state. It returns an array with the current state value and a function to update this value.

### Updating State
- State should not be mutated directly in React. Use the setter function (`setCounter` in this example) provided by `useState` to update state values.

### Rendering Based on State
- Any change in state triggers a re-render of the component, updating the UI to reflect the new state.

---

© 2024 Ansh Shah (anshshah23)

---