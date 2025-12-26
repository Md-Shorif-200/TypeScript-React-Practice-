import React, { useReducer } from "react";



type counterStateType = {
     count : number
}

type counterActionType


const initialState = {
  count: 0,
};

const reducer = (state:counterStateType, action) => {
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
      <button>Incriment(+)</button>
      <button>Decrement(-)</button>
      <button>Reset</button>
      <h1> count : 0 </h1>
    </div>
  );
}
