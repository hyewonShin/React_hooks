import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Content = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div
      className="content"
      style={{
        backgroundColor: isDark ? "black" : "lightgray",
        color: isDark ? "white" : "black",
      }}
    >
      <h1>만두님, 좋은 하루 되세요</h1>
    </div>
  );
};

export default Content;
