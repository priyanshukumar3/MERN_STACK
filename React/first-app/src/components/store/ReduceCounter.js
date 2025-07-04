import React, { useReducer } from "react";

const initialValue = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increament":
      return state + 1;
    case "decreament":
      return state - 1;
    case "increament by 5":
        return state + 5;
    case "decreament by 5":
        return state - 5;
    case "reset":
      return 0;
    default:
      return state;
  }
};

function RedCounter() {
  const [count, dispatch] = useReducer(reducer, initialValue);
  return (
    <main>
      <h1>{count}</h1>
      <button onClick={() => dispatch("increament")}>Increament by 1</button>
      <button onClick={() => dispatch("decreament")}>Decreament by 1</button>
      <button onClick={() => dispatch("increament by 5")}>Increament by 5</button>
      <button onClick={() => dispatch("decreament by 5")}>Decreament by 5</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </main>
  );
}

export default RedCounter;
