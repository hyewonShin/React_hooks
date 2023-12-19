import { useState, useRef } from "react";

export function UseRefHook2() {
  const [renderer, setRenderer] = useState(0);
  const countRef = useRef(0);
  let countVal = 0;

  const doRendering = () => {
    setRenderer(renderer + 1);
  };
  const increaseRef = () => {
    countRef.current = countRef.current + 1;
    console.log("ref: ", countRef.current);
  };
  const increaseVar = () => {
    countVal = countVal + 1;
    console.log("val: ", countVal);
  };

  const printResults = () => {
    console.log(`ref: ${countRef.current}, val: ${countVal}`);
  };

  return (
    <div>
      <p>Ref: {countRef.current}</p>
      <p>Var: {countVal}</p>
      <button onClick={doRendering}>렌더!</button>
      <button onClick={increaseRef}>Ref 올려</button>
      <button onClick={increaseVar}>Var 올려</button>
      <button onClick={printResults}>Ref Var 값 출력</button>
    </div>
  );
}

/** useRef는 마운트된 시점부터 마운트 해제된 시점까지 같은값을 유지해준다(전생에주기에 걸쳐 유지됌) */
