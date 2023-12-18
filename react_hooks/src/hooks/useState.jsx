import { useState } from "react";

export function UseStateHook() {
  const [time, setTime] = useState(1);

  function handleClick() {
    const newTime = time === 12 ? 1 : time + 1;
    setTime(newTime);
  }
  console.log("re-rendering!");

  return (
    <div>
      <span>현재 시각: {time}시</span>
      <button onClick={handleClick}>Update</button>
    </div>
  );
}
