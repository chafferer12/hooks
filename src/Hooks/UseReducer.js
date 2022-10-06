import React, { useReducer } from "react";

export default function UseReducer() {
  const [count, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "add":
        return state + 1;
      case "sub":
        return state - 1;

      default:
        return state;
    }
  }, 0); //初始值，这里初始值为0
  return (
    <div>
      <p>现在的分数是：{count}</p>
      <button onClick={()=>{dispatch({type:"add"})}}>ADD</button>
      <button onClick={()=>{dispatch({type:'sub'})}}>SUB</button>
    </div>
  );
}
