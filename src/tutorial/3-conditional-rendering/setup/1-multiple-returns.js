import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {

  const [isLoading,setLoading] = useState(true);
  const [isError,setIsError] = useState(false);
  const [user,setUser] = useState('default user');


  useEffect(()=>{

    fetch(url)
    .then((response)=>{
      if(response.status>=200 && response.status <=299){
        return response.json()
      }else{
        setLoading(false)
        setIsError(true)
        throw new Error (response.statusText)
      }
    })
    .then((user)=>{
      const {login}= user;
      setUser(login)
      setLoading(false)
    })
    .catch((error)=>console.log(error));
  },[])

  if(isLoading){
    return (<div>
      <h2>Loading...</h2>
    </div>);
  }
  if(isError){
    return (<div>
      <h2>Error...</h2>
    </div>);
  }
  return (<div><h1>{user}</h1> </div>);
};

export default MultipleReturns;
