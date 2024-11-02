import "./App.css";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom } from "./store/Atoms/counter";

function App() {
  return (
    <RecoilRoot>
      <Counter />
    </RecoilRoot>
  );
}

function Counter() {
  return (
    <>
      <CurrentCount />
      <Increase />
      <Decrease />
    </>
  );
}

function CurrentCount() {
  const count = useRecoilValue(counterAtom);
  return (
    <div>
      <p>Count {count}</p>
    </div>
  );
}

function Increase() {
  const setCount = useSetRecoilState(counterAtom);
  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>Increase</button>
    </>
  );
}

function Decrease() {
  const setCount = useSetRecoilState(counterAtom);
  return (
    <>
      <button onClick={() => setCount((c) => c - 1)}>Decrease</button>
    </>
  );
}

export default App;
