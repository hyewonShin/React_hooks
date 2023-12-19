import { useState, useRef, useEffect } from "react";

export function UseRefHook3() {
  const [count, setCount] = useState(1);
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    console.log("렌더링 수: ", renderCount.current);
  });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>올려</button>
    </div>
  );
}

/** useRef는 변화를 감지해야하지만 렌더링을 발생시키면 안되는 값을 댜룰 때 편리하게 사용할 수 있다*/
