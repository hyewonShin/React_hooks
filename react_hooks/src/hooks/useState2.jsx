import { useState } from "react";

const heavyWork = () => {
  console.log("엄청 무거운 작업 !!!");
  return ["홍길동", "김민수"];
};

export function UseStateHook2() {
  // 이런식으로 초기값에 바로 함수를 인자로 넣어버리면 함수 호출 될때마다 초기값 안에 작업이 실행되기때문에 비효율적이다
  //   const [names, setNames] = useState(heavyWork());

  // useState의 초기값을 첫 렌더링시에만 불러오고 싶을때는 콜백형태로 원하는 값을 리턴해주면 된다.
  const [names, setNames] = useState(() => {
    return heavyWork();
  });

  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleUpload = () => {
    setNames((prevState) => {
      console.log("이전 state >>", prevState);
      return [...prevState, input];
    });
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={handleUpload}>Upload</button>
      {names.map((name, idx) => {
        return <p key={idx}>{name}</p>;
      })}
    </div>
  );
}
