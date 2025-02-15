import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName,setFirstName]= useState('');
  const [email, setEmail]= useState('');
  const [people,setPeople]= useState([]);


  const handleSubmit = (e)=>{
      e.preventDefault();
      if(firstName && email){
      const person = {id: new Date().getTime().toString(),firstName,email}
      setPeople((people)=>{
        return[...people,person]
      });
      setFirstName('')
      setEmail('')
      }else{
          const errorMessage = 'Please Enter Name & Email !'
          return errorMessage;
      }

  }

  return (

    <>
    <article>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='firstName'>Name:</label>
          <input type='text' id='firstName' name='firstName' value={firstName} onChange={(e)=>setFirstName(e.target.value)}></input>
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email:</label>
          <input type='text' id='email' name='email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
        </div>
        <button type='submit'>Add Person</button>

      </form>

      <section>
        
          {
            people.map((person,index)=>{
                return(
                      <div className='item' key={person.id}>
                        <p>{person.id}</p>
                        <p>{person.firstName}</p>
                        <p>{person.email}</p>
                      </div>
                    )
            })
          }
    
      </section>
    </article>
    
    </>
  );
};

export default ControlledInputs;
