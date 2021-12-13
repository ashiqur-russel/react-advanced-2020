import React from 'react';
import { data } from '../../../data';

import { useState } from 'react';

const UseStateArray = () => {

  const [people,setPeople]=useState(data)
  // function for delete individual item by id
  const removeItem = (id) => {
          // filter individual item 
          let newPeople = people.filter((person) => person.id !== id);
          setPeople(newPeople);
  }


  return (
    <>
      {
        people.map((person)=>{
          const {id,name}=person;
          return (
            <div key={id} className='item'>
              <h4>{name}</h4>
              <button onClick={() => removeItem(id)}>Remove</button>
            </div>
          )
        })
      }

      <button type="button" className="btn" onClick={()=>setPeople([])}>Delete</button>

    </>
  )
};

export default UseStateArray;
