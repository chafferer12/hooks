import React from "react";
import ColorBtn from "./ColorBtn";
import ColorChange from "./ColorChange";
import { Color } from "./Color";

export default function ColorShow() {
  return (
    <div>
      <Color>
        <ColorChange />
        <ColorBtn />
      </Color>
    </div>
  );
}
