import "./App.css";
import useFetch from "./hooks/useFetch";

function App() {
  const { posts } = useFetch();

  return (
    <>
      {posts.map((post) => (
        <div>
          <span id={post.id}>{post.title}</span>
          <br></br>
        </div>
      ))}
    </>
  );
}

export default App;
