import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Ashiqur Russel",
    age: 28,
    message: 'Happy Birth Day!'
  })

  const changeMessage =()=>{
    setPerson({...person,message:'Wish you good luck!'})
  }
  return (

    <>
    <div>
      <h3 className='item'>{person.name}</h3>
      <h3 className='item'>{person.age}</h3>
      <h3 className='item'>{person.message}</h3>
      <button className='btn' onClick={changeMessage}>Change Message</button>

    </div>
    
    </>
  );
};

export default UseStateObject;
