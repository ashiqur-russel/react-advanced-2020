import React, { useState } from 'react';
import Size from '../../2-useEffect/setup/2-useEffect-cleanup'


const ShowHide = () => {

  const [show,setShow] = useState(false);

  return (
    <>
    <button className='btn' onClick={()=>setShow(!show)}>Show/Hide</button>
    {show && <Size/>}
    </>
  )
};

export default ShowHide;
