import React, { useState } from 'react';

const UseStateCounter = () => {

  const [counter,setCounter] = useState(0);

  //Handler for Increase value
  /* const btnIncrease = ()=>{
    changeCounter(counter+1);
  }
 */
  //Handler for Decrease value
 /*  const btnDecrease = ()=>{
        changeCounter(counter-1);
  } */
  
  //Handler for Reseting value
  const btnReset = ()=>{
      setCounter(0);
  
  }


  const complexIncrease = () => {

    setTimeout(()=>{
      setCounter((prevState)=>{
        return prevState+1;
      })
    },2000);

  }
 
  
  return(
    <>
    <section style={{margin:'4rem 0'}}>
      <h1>Regular Counter</h1>
      <h1>{counter}</h1>
      <button className='btn' onClick={()=>setCounter(counter+1)}>Increse</button>
      <button className='btn'o onClick={()=>setCounter(counter-1)}>Decrease</button>
      <button className='btn' onClick={btnReset}>Reset</button>
    </section>

{/*     Complex Counter 
 */}

    <section style={{margin:'4rem 0'}}>
      <h1>Complex Counter</h1>
      <h1>{counter}</h1>
      <button className='btn' onClick={complexIncrease}>Increse</button>
      
    </section>

    </>
  )
};

export default UseStateCounter;
