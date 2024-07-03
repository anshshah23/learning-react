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
