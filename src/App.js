import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { TimerUsingUseState } from "./Hooks/TimerUsingUseState";
import { TimerUsingUseRef } from "./Hooks/TimerUsingUseRef";
import { PreviousCountTracker } from "./Hooks/PreviousCountTracker";
import { NormalVariable } from "./Normal variable Flow/NormalVariableFLow";

const App = () => {
  return (
    <Router>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>useState vs useRef Timer Example</h1>
        <div style={{ margin: "20px" }}>
          <Link to="/state-timer">
            <button style={{ padding: "10px 20px", margin: "10px" }}>
              State Timer
            </button>
          </Link>
          <Link to="/ref-timer">
            <button style={{ padding: "10px 20px", margin: "10px" }}>
              Ref Timer
            </button>
          </Link>
          <Link to="/previous-count-tracker">
            <button style={{ padding: "10px 20px", margin: "10px" }}>
              Previous Count
            </button>
          </Link>
          <Link to="/normal-variable-flow">
            <button style={{ padding: "10px 20px", margin: "10px" }}>
              Normal Variable
            </button>
          </Link>
        </div>

        <Routes>
          <Route path="/state-timer" element={<TimerUsingUseState />} />
          <Route path="/ref-timer" element={<TimerUsingUseRef />} />
          <Route
            path="/previous-count-tracker"
            element={<PreviousCountTracker />}
          />
          <Route path="/normal-variable-flow" element={<NormalVariable />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
