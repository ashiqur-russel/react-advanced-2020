import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text,setText]= useState('');
  const [isError,setError]= useState(false);


  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';

  const checkError= ()=>{
    setError(!isError);
  }


  return (
    <>
      <h1>{text || 'John Doe'}</h1>
      <button className='btn' onClick={checkError}>toggle error</button>
      {isError && <h1>Error</h1>}
      {isError ? <p>There is an error...</p>:<div><h2>There is no Error</h2></div>}
        </>

  );
};

export default ShortCircuit;
