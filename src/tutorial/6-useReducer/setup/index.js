import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function
  const reducer = (state,action) =>{
    if(action.type==='ADD_ITEM'){
      const newItem = [...state.people,action.payload];
      return {
                ...state,
                people:newItem,
                isModalOpen:true,
                modalContent:'Item Added'
              }
    }
    if(action.type==="NO_VALUE"){
        return { ...state,isModalOpen:true,modalContent:'please Enter value'}
    }
    if(action.type==='CLOSE_MODAL'){
      return   { ...state,isModalOpen:false}
    }

    throw new Error ('no matching action type');
  };

  const defaultState = {
      people:[],
      isModalOpen:false,
      modalContent:'Hello World',
  };


const Index = () => {
  const [name, setName]= useState('');
  const [state,dispatch] = useReducer(reducer,defaultState);
  const handleSubmit = (e)=>{
      e.preventDefault();
      if(name){
        const newItem = { id: new Date().getTime().toString(),name};
        dispatch({type:'ADD_ITEM',payload:newItem}) 
      }else{
        dispatch({type:"NO_VALUE"})
      }
  };


  const closeModal = () => {
    dispatch ({type:'CLOSE_MODAL'})
  }


  return ( 
    <>
    {state.isModalOpen && <Modal modalContent={state.modalContent} closeModal={closeModal}/>}
   <div className='back'>
      <form onSubmit={handleSubmit} className='form'>
      <div>
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
      </div> 
      <button type='submit'>Add</button>     
    </form>

    {
      state.people.map((data,index)=>{
        return(
          <div key={data.id} className='item'>
            <h4>{data.name}</h4>
            <button onClick={()=>dispatch({type:'REMOVE_ITEM', payload: data.id})}>Remove</button>
          </div>
        )
      })
    }
   </div>
    </>
    
  );
};

export default Index;
