import React, { useRef } from "react";

export default function UseRef() {
  const inpRef = useRef(null)
  const onBtn = () => {
    inpRef.current.value = "hello"
    console.log(inpRef);
  }
  return (
    <div>
      <input ref={inpRef} type="text" />
      <button onClick={onBtn}>在input上展示文字</button>
    </div>
  );
}
