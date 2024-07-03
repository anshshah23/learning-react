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
