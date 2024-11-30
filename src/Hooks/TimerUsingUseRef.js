import React, { useRef, useEffect } from "react";

export const TimerUsingUseRef = () => {
  const secondsRef = useRef(0); // Ref for time
  const timerRef = useRef(null); // Ref for interval
  console.log("Ref Timer updated--initial");

  const startTimer = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        secondsRef.current += 1; // Updates the ref (no re-render)
        console.log("Ref Timer updated");
        document.getElementById(
          "ref-display"
        ).textContent = `Ref Timer: ${secondsRef.current} seconds`; // DOM update
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    secondsRef.current = 0;
    timerRef.current = null;
    document.getElementById(
      "ref-display"
    ).textContent = `Ref Timer: ${secondsRef.current} seconds`; // DOM reset
  };

  //   useEffect(() => {
  //     document.getElementById(
  //       "ref-display"
  //     ).textContent = `Ref Timer: ${secondsRef.current} seconds`;
  //   }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2 id="ref-display">Ref Timer: {timerRef.current} seconds</h2>
      <button onClick={startTimer} style={{ margin: "5px" }}>
        Start
      </button>
      <button onClick={stopTimer} style={{ margin: "5px" }}>
        Stop
      </button>
      <button onClick={resetTimer} style={{ margin: "5px" }}>
        Reset
      </button>
      <button>{timerRef.current === 1 ? "Show" : "Hide"}</button>
      {/* // UI didn't chnages according to condition, only 
      the timer.current is changes but on basis of that UI 
      will not change since component won't re-rendered  */}
    </div>
  );
};
