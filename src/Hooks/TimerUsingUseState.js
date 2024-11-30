import React, { useState } from "react";

export const TimerUsingUseState = () => {
  const [seconds, setSeconds] = useState(0);
  console.log("State Timer re-rendered");
  let timer = null;

  const startTimer = () => {
    if (!timer) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1); // Updates state (triggers re-render)
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(timer);
    timer = null;
  };

  const resetTimer = () => {
    clearInterval(timer);
    setSeconds(0); // Resets state
    timer = null;
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>State Timer: {seconds} seconds</h2>
      <button onClick={startTimer} style={{ margin: "5px" }}>
        Start
      </button>
      <button onClick={stopTimer} style={{ margin: "5px" }}>
        Stop
      </button>
      <button onClick={resetTimer} style={{ margin: "5px" }}>
        Reset
      </button>
      <button>{seconds === 1 ? "Show" : "Hide"}</button>
      {/* // UI chnages according to condition, 
      component re-rendered on every state change */}
    </div>
  );
};
