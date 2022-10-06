import React, { useContext } from "react";
import { ColorContext } from "./Color";

export default function ColorChange() {
  const {color}=useContext(ColorContext)
  return (
    <div>
      <h2 style={{ color: color }}>字体颜色为：{color}</h2>
    </div>
  );
}
