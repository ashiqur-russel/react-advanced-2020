import React, { useState } from 'react';

const UseStateBasics = () => {
 
  let title = "random title";
  const [text,setText]=useState(title);

  const handleClick=()=>{

    if(text===title){
            setText("Hello World");
    }else{
      setText(title);
    }
  }
  return( 
    <React.Fragment>
    <h1>{text}</h1>
    <button type="button" className="btn" onClick={handleClick}>Change Title</button>
    </React.Fragment>
    );
};

export default UseStateBasics;
