import { useState } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";
import { usePrev } from "./hooks/usePrev";

// function App() {
//   const { data } = useFetch("https://jsonplaceholder.typicode.com/posts");

//   return (
//     <>
//       {data.map((post) => (
//         <>
//           <span id={post.id}>{post.title}</span>
//           <br></br>
//         </>
//       ))}
//     </>
//   );
// }

function App() {
  const [count, setCount] = useState(0);
  const prev = usePrev(count);

  const increaseCount = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
      <p>Current state {count}</p>
      <button onClick={increaseCount}>Click Me</button>
      <p>Previous state {prev}</p>
    </>
  );
}

export default App;
