import { useEffect, useState } from "react";
import "./base.css";
import axios from "axios";
import BlogCard from "./BlogCard";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      console.log(response.data);
      setBlogs(response.data);
    };

    fetchBlogs();
  }, []);

  console.log("this is blogs", blogs);

  return (
    <div className="container">
      <div className="blog-container">
        <h1>Welcome to my blogs</h1>
        {blogs
          .filter((blog) => blog.body.includes("consequuntur"))
          .map((blog) => (
            <BlogCard blog={blog} />
          ))}
      </div>
    </div>
  );
};

export default Blogs;
