import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <h1>Counter</h1>
      <h3>{counter}</h3>
      <button onClick={() => increment()}>Increase</button>
      <button onClick={() => decrement()}>Decrease</button>
    </div>
  );
};

export default App;
