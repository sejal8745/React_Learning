const calculatePowerOfTwo = (val) => {
  return 2 * val;
};

export const NormalVariable = () => {
  let powerOfTwo = 1;
  powerOfTwo = calculatePowerOfTwo(powerOfTwo);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center", // Centers horizontally
        alignItems: "center", // Centers vertically
        height: "100vh", // Full height of the viewport
      }}
    >
      <div
        style={{
          border: "2px solid black",
          padding: "3px",
          width: "20vw",
        }}
      >
        <h1>Hello Patlu, {powerOfTwo}</h1>
      </div>
    </div>
  );
};
