import React from "react";

const Content = ({ isDark }) => {
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
