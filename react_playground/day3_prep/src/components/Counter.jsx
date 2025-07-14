import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setCount((prev) => prev - 1);
  };

  const handleIncreaseByAmount = (amount = 1) => {
    setCount((prev) => prev + amount);
  };

  return (
    <div className="counter__container">
      <h2>Count: {count}</h2>
      <div>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
        <button onClick={() => handleIncreaseByAmount(5)}>
          Increase Amount
        </button>
      </div>
    </div>
  );
};

export default Counter;
