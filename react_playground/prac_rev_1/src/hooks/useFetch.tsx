import { useState, useEffect } from "react";

const useFetch = () => {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await response.json();
    setPosts(json);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return { posts };
};

export default useFetch;
