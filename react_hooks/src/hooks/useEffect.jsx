import { useState, useEffect } from "react";

export function UseEffectHook() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const handleCountUpdate = () => {
    setCount(count + 1);
  };
  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  // 랜더링마다 매번 실행됨 -렌더링 이후
  useEffect(() => {
    console.log("😁렌더링 >>>>>>>>>>>");
  });

  // 마운트 + [item] 변경될때만 실행됨
  useEffect(() => {
    console.log("⭐count 변환 >>>>>>>>>>>");
  }, [count]);

  // 마운트 + [item] 변경될때만 실행됨
  useEffect(() => {
    console.log("♥️name 변환 >>>>>>>>>>>");
  }, [name]);

  useEffect(() => {
    console.log("🎉마운팅 >>>>>>>>>>>");
  }, []);

  return (
    <div>
      <button onClick={handleCountUpdate}>Update</button>
      <span>count: {count} </span>
      <br />
      <br />
      <input type="text" value={name} onChange={handleInputChange} />
      <br />
      <span>name: {name} </span>
    </div>
  );
}
