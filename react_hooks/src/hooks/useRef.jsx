import { useState, useRef } from "react";

export function UseRefHook() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  console.log("countRef >>>", countRef);
  console.log("countRef.current >>>", countRef.current);
  console.log("렌더링 >>>>>>>>>>>>>>>>>>");

  function increaseCountState() {
    setCount(count + 1);
  }
  function increaseCountRef() {
    countRef.current = countRef.current + 1;
    console.log("Ref: ", countRef.current);
  }
  console.log("re-rendering!");

  return (
    <div>
      <p>State: {count}</p>
      <p>Ref: {countRef.current}</p>
      <button onClick={increaseCountState}>State 올려</button>
      <button onClick={increaseCountRef}>Ref 올려</button>
    </div>
  );
}

/** useRef **
 *
 * 함수형 컴포넌트는 렌더링시 해당함수가 다시 불려짐
 *
 * State의 변화 -> 렌더링 -> 컴포넌트 내부 변수들 초기화
 *
 * Ref의 변화 -> No 렌더링 -> 변수들의 값이 유지됌
 *
 * State의 변화 -> 렌더링 -> 그래도 Ref의 값은 유지됌
 *
 * => useRef를 사용함으로써 불필요한 렌더링을 막을 수 있음
 *
 */
