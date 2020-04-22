import React, { useState, useEffect } from "react";

function LoadingHeaderIndicator() {
  const [width, setWidth] = useState(0);
  const [intervalId, setIntervalId] = useState(0);

  const timer = () => {
    const newWidth = width + 10;
    if (newWidth <= 100) {
      setWidth(width + 10);
    }
  };

  const startIndicator = () => {
    const id = setInterval(timer(), 1000);
    setIntervalId(id);
  };

  const clear = () => {
    clearInterval(intervalId);
  };

  useEffect(() => {
    startIndicator();
    return () => {
      // cleanup
      clear();
    };
  }, [width]);

  return (
    <div>
      <div
        style={{
          width: `${width}%`,
          backgroundColor: "#24A661",
          height: "5px",
          transition: "width .7s ease-in-out",
        }}
      ></div>
    </div>
  );
}

export default LoadingHeaderIndicator;
