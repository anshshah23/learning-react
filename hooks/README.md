
---

# React Counter App

This project is a simple React application that demonstrates basic state management using the `useState` hook. It includes a counter that can be incremented or decremented with corresponding buttons.

## Code Explanation

### Import Statements
- `useState` is imported from React to manage state in functional components.
- `'./App.css'` is imported for styling purposes, though it's not used in this snippet.

### Component Definition (`App` function component)
- Uses the `useState` hook to declare a state variable `counter` initialized to `0` and a function `setCounter` to update this state.

### Event Handlers (`addValue` and `removeValue`)
- `addValue`: Increments the `counter` state by 1 when the "Add Value" button is clicked.
- `removeValue`: Decrements the `counter` state by 1 when the "Remove Value" button is clicked.

### Return Statement
- Renders JSX containing an `<h1>` tag with the title "Counter Project", an `<h3>` tag displaying the current value of `counter`, and two `<button>` tags triggering `addValue` and `removeValue` functions respectively.

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