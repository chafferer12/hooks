import React, { useState,useEffect } from "react";

export default function UseState() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`useEffect=>You click ${count} times`);
  })
  return (
    <div>
      <p>You click {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
