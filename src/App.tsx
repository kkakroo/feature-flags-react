import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Feature, useFeature } from "./Feature/Feature";

function App() {
  const [count, setCount] = useState(0);
  // fetch feature flag by name
  const doubleStepCountFlag = useFeature("doubleStepCount");
  const stepCount = doubleStepCountFlag ? 2 : 1;
  return (
    <>
      <div>
        <Feature name="newLogo">
          {(flag) => {
            return flag ? (
              // if feature flag is enabled
              <>
                <a href="https://vitejs.dev" target="_blank">
                  <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>

                <a href="https://react.dev" target="_blank">
                  <img
                    src={reactLogo}
                    className="logo react"
                    alt="React logo"
                  />
                </a>
              </>
            ) : (
              // if feature flag is disabled
              <a href="https://vitejs.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
              </a>
            );
          }}
        </Feature>
      </div>
      <h1>Feature Flags in React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + stepCount)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
