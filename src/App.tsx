import { useState } from "react";
import { BlockingButton } from "./BlockingButton";
import { ThrottleButton } from "./ThrottleButton";
import { DebounceButton } from "./DebounceButton";

const wait = async (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>Count: {count}</div>
      <div>
        <ul>
          <li>
            <button
              onClick={() => {
                setCount((prev) => prev + 1);
              }}
              children="Default: Count Up"
            />
          </li>
          <li>
            <BlockingButton
              text="Block: Count Up"
              onClick={async () => {
                await wait(1000);
                setCount((prev) => prev + 1);
              }}
            />
          </li>
          <li>
            <ThrottleButton
              text="Throttle: Count Up"
              onClick={() => {
                setCount((prev) => prev + 1);
              }}
              timeoutMs={1000}
            />
          </li>
          <li>
            <DebounceButton
              text="Debounce: Count Up"
              onClick={() => {
                setCount((prev) => prev + 1);
              }}
              timeoutMs={1000}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};
