import React, { useState } from "react";

const Circle = ({ delay }) => {
  let randomColor = () => {
    return Math.floor(Math.random() * 255);
  };

  const [color, setColor] = useState([
    randomColor(),
    randomColor(),
    randomColor(),
  ]);

  setInterval(() => {
    setColor([randomColor(), randomColor(), randomColor()]);
  }, 1000);

  return (
    <div
      className="circle"
      style={{
        backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})`,
        transitionDelay: `${delay}ms`,
      }}
    ></div>
  );
};

export default Circle;
