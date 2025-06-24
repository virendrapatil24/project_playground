import { useDispatch, useSelector } from "react-redux";
import { decrement, increaseByAmount, increment } from "./counterSlice";

const CounterPage = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>{count}</h2>
      <div className="counter__buttons">
        <button onClick={() => dispatch(increment())}>Increase</button>
        <button onClick={() => dispatch(decrement())}>Decrease</button>
        <button onClick={() => dispatch(increaseByAmount(4))}>
          Increase By Amount
        </button>
      </div>
    </div>
  );
};

export default CounterPage;
