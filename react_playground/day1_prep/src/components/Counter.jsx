import { useState } from "react";
import "./base.css";
import Button from "./Button";
import ChildrenTest from "./ChildrenTest";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("black");

  const increaseCount = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    console.log(count);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="container">
      <div className="counter-container" style={{ backgroundColor: color }}>
        <h2>Count: {count}</h2>
        <button onClick={increaseCount}>Increase</button>
        <button onClick={decreaseCount}>Decrease</button>
        <button onClick={() => setColor("red")}>Red</button>
        <Button text="Increase" color="red" onclick={increaseCount} />
        <Button text="Decrease" color="grey" onclick={decreaseCount} />
        <ChildrenTest>
          <h2>LOL</h2>
        </ChildrenTest>
      </div>
    </div>
  );
};

export default Counter;
