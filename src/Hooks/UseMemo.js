import React, { useState, useMemo, Children } from "react";

export default function UseMemo() {
  const [xiaohong, setXiaohong] = useState("小红在待客状态");
  const [xiaoming, setXiaoming] = useState("小明在待客状态");
  return (
    <div>
      <button
        onClick={() => {
          new Date().getTime();
        }}
      >
        小红
      </button>
      <button onClick={() => { new Date().getTime() + '小明向我们走来' }}>小明</button>
      <ChildrenComponent name={xiaohong}>{ xiaoming}</ChildrenComponent>
    </div>
  );
}
function ChildrenComponent({ name, children }) {
  function changexiaohong() {
    console.log("小红来了");
    return name+',小红向我们走来了'
  }
  const actionXiaohong=useMemo(()=>changexiaohong(name),[name])
  return (
    <div>
      <div>{ actionXiaohong}</div>
      <div>{children}</div>
    </div>
  )
}
