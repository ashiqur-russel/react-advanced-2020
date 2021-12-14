import React, { useState } from 'react';

const UseStateCounter = () => {

  const [counter,changeCounter] = useState(0);

  //Handler for Increase value
  const btnIncrease = ()=>{
    changeCounter(counter+1);
  }

  //Handler for Decrease value
  const btnDecrease = ()=>{
        changeCounter(counter-1);
  }
  
  //Handler for Reseting value
  const btnReset = ()=>{
    changeCounter(0);
  }
  
  
  return(
    <>
    <section style={{margin:'4rem 0'}}>
      <h1>Regular Counter</h1>
      <h1>{counter}</h1>
      <button className='btn' onClick={btnIncrease}>Increse</button>
      <button className='btn'onClick={btnDecrease}>Decrease</button>
      <button className='btn' onClick={btnReset}>Reset</button>

    </section>
    </>
  )
};

export default UseStateCounter;
