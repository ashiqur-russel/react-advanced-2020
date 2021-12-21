import React, {useReducer,useEffect,useRef}from 'react'
import { reducer } from '../tutorial/6-useReducer/final/reducer'

const initialState = {
    isRunning:false,
    time = 0
}

const Stopwatch = () => {
    const [state,dispatch] = useReducer(reducer,initialState);
    const ref = useRef(0);

    useEffect(()=>{
           if(!state.isRunning){
               return;
           }
               ref.current= setInterval(()=>dispatch({type:"tick"}),1000)

    }
 
    )
    return (
        <div>
            
        </div>
    )
}

export default Stopwatch
