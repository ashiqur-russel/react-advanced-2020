import React, { useState } from 'react';
import Size from '../../2-useEffect/setup/2-useEffect-cleanup'
import Data from '../../2-useEffect/setup/3-useEffect-fetch-data'



const ShowHide = () => {

  const [show,setShow] = useState(false);
  const [showData,setShowData] = useState(false);

  


  return (
    <>
    <button className='btn' onClick={()=>setShow(!show)}>Github User</button>
    <button className='btn' onClick={()=>setShowData(!showData)}>Window Size</button>

    {show && <Size/>}
    {!showData && <Data />}
    </>
  )
};

export default ShowHide;
