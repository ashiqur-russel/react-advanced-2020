import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {

  //const [loading,setLoading] = useState(true);
  const [size,setSize] = useState(window.screen.width);

  const actualwidth =()=>{
          setSize(window.innerWidth);

  }

  useEffect(()=>{
      window.addEventListener("resize",actualwidth);
      return()=>{
      window.removeEventListener("resize",actualwidth);
      }
  },[]);

  return (
    <>
    <div style={{marginTop:'2rem'}}>
      <h1>Wondow </h1>
      <h2>Size : {size} px</h2>
    </div>
    
    </>
  )
};

export default UseEffectCleanup;
