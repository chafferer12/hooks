import React, { useState, useEffect, useCallback } from "react";

function useWinSize() {
  const [size, setSize] = useState({
    with: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  });
  const onResize = useCallback(() => {
    setSize({
      with: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    });
  }, []);
  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.addEventListener("resize", onResize);
    };
  }, []);
  return size;
}
export default function UseWinSize() {
  const size = useWinSize();
  return (
    <div>
      页面Size：{size.with}X{size.height}
    </div>
  );
}
