import React, { useReducer } from "react";



type counterStateType = {
     count : number
}

type counterActionType  = {
  //  type : string;
   type : 'increment' | 'decrement' | 'reset';
   payload : number;
}


const initialState = {
  count: 0,
};

const reducer = (state:counterStateType, action:counterActionType) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };

    case "decrement":
      return { count: state.count - action.payload };

    case "reset":
      return { count: 0 };

    default:
      return state;
  }
};

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <button onClick={() => dispatch({type : "increment" , payload : 1 })}>Incriment(+)</button>
      <button onClick={() => dispatch({type : "decrement" , payload : 1 })}>Decrement(-)</button>
      <button onClick={() => dispatch({type : "reset" , payload : 0 })}>Reset</button>

      <h1> count : {state.count} </h1>
    </div>
  );
}
