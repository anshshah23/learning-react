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
