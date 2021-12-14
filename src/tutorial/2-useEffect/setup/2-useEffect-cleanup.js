import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = (props) => {

  const [loading,setLoading] = useState(true);
  const [size,setSize] = useState(window.screen.width);

  const actualwidth =()=>{
    console.log(window.innerWidth);
          setSize(window.innerWidth);

  }

  useEffect(()=>{
      const mainSize = window.addEventListener("resize",actualwidth);
      return()=>{
        window.removeEventListener("resize",actualwidth);
      }
  },[size]);

  return (
    <>
    <div className='container'>
      <p>Actual size of windows is </p>
      <h1>{size} px</h1>
    </div>
    
    </>
  )
};

export default UseEffectCleanup;
