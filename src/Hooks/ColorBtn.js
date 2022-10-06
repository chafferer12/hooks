import React,{useContext} from "react";
import { ColorContext,update } from "./Color";
export default function ColorBtn() {
  const {dispatch}=useContext(ColorContext)
  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: update, color: "red" });
        }}
      >
        红色
      </button>
      <button
        onClick={() => {
          dispatch({ type: update, color: "yellow" });
        }}
      >
        黄色
      </button>
    </div>
  );
}
