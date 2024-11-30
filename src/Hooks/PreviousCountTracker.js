import { useEffect, useRef, useState } from "react";

export const PreviousCountTracker = () => {
  const [count, setCount] = useState(0); // Start with a valid number
  const previousRef = useRef(null); // Initialize with null or any default value

  // Update the `previousRef` value after the `count` changes
  useEffect(() => {
    previousRef.current = count;
  }, [count]);

  return (
    <>
      <h1>Current Value: {count}</h1>
      <h1>Previous Value: {previousRef.current}</h1>
      {/* Correct the button logic */}
      <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
      <h3>{count === 1 ? "One" : "Number"}</h3>
      <h3>{previousRef.current === 1 ? "One-prev" : "Number-prev"}</h3>
    </>
  );
};
