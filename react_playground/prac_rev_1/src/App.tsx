import "./App.css";
import useFetch from "./hooks/useFetch";

function App() {
  const { data } = useFetch("https://jsonplaceholder.typicode.com/posts");

  return (
    <>
      {data.map((post) => (
        <>
          <span id={post.id}>{post.title}</span>
          <br></br>
        </>
      ))}
    </>
  );
}

export default App;
